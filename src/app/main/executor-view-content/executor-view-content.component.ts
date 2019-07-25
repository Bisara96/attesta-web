import { OnChanges, SimpleChanges } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MainService } from './../services/main.service';
import { Component, OnInit, Input } from '@angular/core';
import { AssignAgentsComponent } from '../assign-agents/assign-agents.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-executor-view-content',
  templateUrl: './executor-view-content.component.html',
  styleUrls: ['./executor-view-content.component.scss']
})
export class ExecutorViewContentComponent implements OnChanges, OnInit {

  @Input() sprintID;
  storyID = -999;
  storyAgents: any[] = [];

  stories = [];

  source: LocalDataSource;

  settings = {
    columns: {
      no: {
        title: 'Test Case ID',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      title: {
        title: 'Test Case',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      expectedResult: {
        title: 'Expected Result',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      actualResult: {
        title: 'Last Execution Result',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          if(value == '') {
            value = 'PENDING'
          }
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      status: {
        title: 'Status',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          if(value == '') {
            value = 'PENDING'
          }
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      }
    },
    mode: 'external',
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [
        {
          name: 'executeTestCase',
          title: '<ng-template><button mat-raised-button><i class="fas fa-play"></i></button></ng-template>'
        }
      ]
    }
  };

  data = [  
  ];

  constructor(private mainService: MainService,private dialog: MatDialog) { 
  }

  ngOnInit() {
    // this.loadUserStories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.source = new LocalDataSource([]);
    this.loadUserStories();
  }

  loadUserStories() {
    this.mainService
      .getUserStories(this.sprintID)
      .subscribe(result => this.stories = result);
  }

  getStoryTestCases(index,story_id) {
    this.getStoryAgents();
    this.storyID = story_id;
    if(this.stories[index].testCases && this.stories[index].testCases.length > 0){
      this.loadTestCasesData(index);
      return;
    }
    this.mainService.getTestCases(story_id).subscribe(result => {
      // this.stories[index].testCases = result;
      // this.loadTestCasesData(index);
      this.getTestCaseResults(result,index);
    });
  }

  getTestCaseResults(testCases,index) {
    this.stories[index]['testCases'] = [];
    testCases.forEach(testCase => {
      this.mainService.getLastResult(testCase.id).subscribe(result => {
        if(result.length > 0) {
          testCase['actualResult'] = result[0]['result'];
          testCase['status'] = testCase['actualResult'] == testCase['expectedResult'] ? 'PASS' : 'FAIL';
          this.stories[index]['testCases'].push(testCase);
          this.loadTestCasesData(index);
        } else {
          this.stories[index]['testCases'].push(testCase);
          this.loadTestCasesData(index);
        }
      });
    });
  }

  loadTestCasesData(index) {
    this.stories[index]['testCases'].sort((a,b) => a.no.localeCompare(b.no));
    this.source = new LocalDataSource(this.stories[index]['testCases']);
  }

  executeTestCase(event) {
    this.mainService.executeTestCase(event.data.id).subscribe(result => {
      console.log(result);
    });
  }

  viewAssignedAgents() {
    this.dialog
      .open(AssignAgentsComponent, {
        width: "800px",
        height: "550px",
        autoFocus: false,
        data: {
          storyID: this.storyID,
          cancelable: true
        }
      })
      .afterClosed()
      .subscribe(result => {
        // this.recordUserStory(result.url, result.id);
      });
  }

  getStoryAgents() {
    this.mainService.getAssignedAgents(this.storyID).subscribe(result => this.storyAgents = result);
  }

}
