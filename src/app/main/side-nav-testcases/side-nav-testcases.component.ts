import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ITreeOptions, TREE_ACTIONS, KEYS } from 'angular-tree-component';

@Component({
  selector: "app-side-nav-testcases",
  templateUrl: "./side-nav-testcases.component.html",
  styleUrls: ["./side-nav-testcases.component.css"]
})
export class SideNavTestcasesComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  nodes = [
    {
      id: 1,
      name: "Story 1",
      type: "story",
      children: [
        { name: "Test Case 1", type: "testcase" },
        { name: "Test Case 2", type: "testcase" },
        { name: "Test Case 3", type: "testcase" },
        { name: "Test Case 4", type: "testcase" }
      ]
    },
    {
      id: 2,
      name: "Story 2",
      type: "story",
      children: [
        { name: "Test Case 1", type: "testcase" },
        { name: "Test Case 2", type: "testcase" },
        { name: "Test Case 3", type: "testcase" },
        { name: "Test Case 4", type: "testcase" },
        { name: "Test Case 5", type: "testcase" },
        { name: "Test Case 6", type: "testcase" }
      ]
    }
  ];
  options: ITreeOptions = {
    actionMapping: {
      mouse: {
        click: (tree, node, $event) => {
          switch(node.data.type){
            case "story":
            this.storyView(node.data.id);
            break;
            case "testcase":
            this.testCaseView(node.data.id);
            break;
          }
        }
      }
    }
  }

  isStoryView = false;
  isTestCaseView = false;

  storyID = "";
  testCaseID = "";

  constructor(private breakpointObserver: BreakpointObserver) {}

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
}
