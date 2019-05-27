import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MainService } from '../services/main.service';
import { TreeComponent, ITreeOptions } from 'angular-tree-component';
import { TreeNode } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-side-nav-reports',
  templateUrl: './side-nav-reports.component.html',
  styleUrls: ['./side-nav-reports.component.css']
})
export class SideNavReportsComponent implements OnInit {

  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  active = '';
  selectedTestCaseID;

  options: ITreeOptions = {
    actionMapping: {
      mouse: {
        click: (tree, node, $event) => {
          switch (node.data.type) {
            case "story":
              
              break;
            case "testcase":
                this.active = 'testcase';
                this.selectedTestCaseID = node.data.testcaseId;
              break;
          }
        }
      }
    },
    getChildren: (node: TreeNode) => {
      switch(node.data.type) {
        case "sprint":
            return this.getStories(node.data.sprintId).then(result => {
              let children = [];
              result.forEach(story => {
                children.push({
                  storyId: story['id'],
                  name: story['description'],
                  type: 'story',
                  hasChildren: true
                });
              });
              return children
            });
          break;
        case "story":
            return this.getTestCases(node.data.storyId).then(result => {
              let children = [];
              result.forEach(testCase => {
                children.push({
                  testcaseId: testCase['id'],
                  name: testCase['no'].toUpperCase()+': '+testCase['title'],
                  type: 'testcase'
                });
              });
              return children
            });
          break;
      }
    }
  };

  projectList = [];
  sprints = [];
  selectedProject;
  selectedSprint;
  selectedSprintID;
  showStories = false;
  data = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private mainService: MainService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.mainService.getProjects().subscribe(result => {
      this.projectList = result;
      if(this.projectList.length > 0) {
        this.getProjectSprints(this.projectList[0]);
      }
    })
  }

  getProjectSprints(project) {
    this.selectedProject = project;
    this.mainService.getProjectSprints(project.id).subscribe(result => {
      this.sprints = result;
      this.setSprintsTreeData(result);
    });
  }

  selectSprint(sprint) {
    this.showStories = true;
    this.selectedSprint = sprint;
    this.selectedSprintID = sprint.id;
  }

  setSprintsTreeData(sprints) {
    this.data = [];
    sprints.forEach(sprint => {
      let node = {};
      node["sprintId"] = sprint.id;
      node["name"] = sprint.sprintName;
      node["type"] = "sprint";
      node["hasChildren"] = true;
      this.data.push(node);
      this.tree.treeModel.update();
    });
  }

  getStories(sprint_id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.mainService.getUserStories(sprint_id).subscribe(result => {
        resolve(result);
      });
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
