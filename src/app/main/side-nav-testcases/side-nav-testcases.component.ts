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
    this.getUserStories();
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

  getUserStories() {
    this.mainService
      .getUserStories()
      .subscribe(result => this.setUSListData(result));
  }

  setUSListData(stories: UserStory[]) {
    this.userStories = stories;
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
}
