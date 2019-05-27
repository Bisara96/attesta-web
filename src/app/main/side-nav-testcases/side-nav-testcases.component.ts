import { Component, OnInit, ViewChild } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  ITreeOptions,
  TREE_ACTIONS,
  KEYS,
  TreeComponent,
  TreeNode
} from "angular-tree-component";
import { MainService } from "../services/main.service";
import { UserStory } from "../entities/UserStory";

@Component({
  selector: "app-side-nav-testcases",
  templateUrl: "./side-nav-testcases.component.html",
  styleUrls: ["./side-nav-testcases.component.css"]
})
export class SideNavTestcasesComponent implements OnInit {
  @ViewChild(TreeComponent)
  private tree: TreeComponent;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  userStories = [];
  nodes = [];
  projectList = [];
  selectedProject = {
    id: -999,
    projectName: 'Project Name'
  };

  selectedSprint = {
    sprintName: 'Sprint Name'
  };

  options: ITreeOptions = {
    actionMapping: {
      mouse: {
        click: (tree, node, $event) => {
          switch (node.data.type) {
            case "story":
              this.storyView(node.data.uId);
              break;
            case "testcase":
              this.testCaseView(node.data.tId);
              break;
          }
        }
      }
    },
    getChildren: (node: TreeNode) => {
      return this.getTestCases(node.data.uId).then(result => {
        let children = [];
        result.forEach(testCase => {
          children.push({
            tId: testCase['id'],
            name: testCase['no'].toUpperCase(),
            type: 'testcase'
          });
        });
        return children
      });
    }
  };

  isStoryView = false;
  isTestCaseView = false;

  storyID = "";
  testCaseID = "";

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  storyView(id) {
    this.storyID = id;
    this.isStoryView = true;
    this.isTestCaseView = false;
  }

  testCaseView(id) {
    this.testCaseID = id;
    this.isStoryView = false;
    this.isTestCaseView = true;
  }

  selectSprint(project, sprint) {
    this.selectedProject = project;
    this.selectedSprint = sprint; 
  }

  getUserStories(sprintID) {
    this.mainService
      .getUserStories(sprintID)
      .subscribe(result => this.setUSListData(result));
  }

  setUSListData(stories: UserStory[]) {
    this.userStories = stories;
    this.nodes = [];
    stories.forEach(story => {
      let node = {};
      node["uId"] = story.id;
      node["name"] = story.description;
      node["type"] = "story";
      node["hasChildren"] = true;
      // node['children'] = [];
      // let testCases = this.getTestCases(story.id);
      // testCases.forEach(testCase => {
      //   let child = {};
      //   child["name"] = testCase["id"];
      //   child["type"] = "testcase";
      // });
      this.nodes.push(node);
      this.tree.treeModel.update();
    });
  }

  getTestCases(story_id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.mainService.getTestCases(story_id).subscribe(result => {
        resolve(result);
      });
    });
  }

  getProjects() {
    this.mainService.getProjects().subscribe(result => {
      this.projectList = result;
      if(result.length > 0) {
        this.selectedProject = result[0];
        this.getSprints();
      }
    })
  }

  getSprints() {
    this.mainService.getSprints().subscribe(result => {
      for(var i = 0;i < this.projectList.length;i++){
        this.projectList[i]['sprints'] = [];
        result.forEach(sprint => {
          if(sprint.project.id == this.projectList[i].id)
          this.projectList[i]['sprints'].push(sprint);
        });
      }
      if(this.projectList.length > 0 && this.projectList[0].sprints.length > 0) {
        this.selectedSprint = this.projectList[0].sprints[this.projectList[0].sprints.length-1];
        this.getUserStories(this.selectedSprint['id']);
      }
    });
  }
}
