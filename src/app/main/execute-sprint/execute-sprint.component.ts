import { LocalDataSource } from 'ng2-smart-table';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddUserStoryComponent } from '../add-user-story/add-user-story.component';
import { MainService } from '../services/main.service';
import {interval} from 'rxjs';
import {take} from 'rxjs/operators';
import { TestcaseExecutionStatusIndicatorComponent } from 'src/app/testcase-execution-status-indicator/testcase-execution-status-indicator.component';

@Component({
  selector: 'app-execute-sprint',
  templateUrl: './execute-sprint.component.html',
  styleUrls: ['./execute-sprint.component.scss']
})
export class ExecuteSprintComponent implements OnInit {

  sprintID;
  userstories;
  no_of_stories = 0;
  loaded_stories = 0;
  currentActive = -99;
  currTestCase = 0;
  execution_que = [];
  pending = false;
  timer;
  timersub;

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
      execution_status: {
        title: 'Execution Status',
        filter: false,
        type: "custom",
        renderComponent: TestcaseExecutionStatusIndicatorComponent
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };



  constructor(
    public dialogRef: MatDialogRef<AddUserStoryComponent>,
    private mainService: MainService,@Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.sprintID = data.id;
  }

  ngOnInit() {
    this.getSprintStories();  

 
    // this.executeStories();
  }

  executeQue() {
    if(this.execution_que.length !== 0 && !this.pending) {
      let obj = this.execution_que.shift();
      if(this.currentActive !== -99)
      this.userstories[this.currentActive].executing = false;
      this.currentActive = obj.story;
      this.currTestCase = obj.tc;
      this.userstories[this.currentActive].executing = true;
      this.userstories[this.currentActive].testcases[this.currTestCase].execution_status = "RUNNING";
      this.userstories[this.currentActive].tableData = new LocalDataSource(this.userstories[this.currentActive].testcases);
      this.pending = true;
      this.mainService.executeTestCase(obj.testcase.id).subscribe(result => {
        this.userstories[this.currentActive].testcases[this.currTestCase]['execution_status'] = "EXECUTED";
        this.userstories[this.currentActive].tableData = new LocalDataSource(this.userstories[this.currentActive].testcases);
        this.pending = false;
        // this.userstories[this.currentActive].executing = false;
        this.executeQue();
      });
    }
  }

  intervalTimer() {
        // Create an Observable that will publish a value on an interval
    let secondsCounter = interval(5000);
    // Subscribe to begin publishing values
    this.timersub = secondsCounter.subscribe(n => {
      console.log("Checking QUE ");
      this.executeQue();
    });

  }

  ngOnDestroy() {
    this.timersub.unsubscribe();
  }


  getSprintStories() {
    this.mainService.getUserStories(this.sprintID).subscribe(result => {
      this.no_of_stories = result.length;
      this.userstories = [];
      result.forEach(story => {
        this.mainService.getTestCases(story.id).subscribe(testCases => {
          story['testcases'] = testCases;
          story['tableData'] = new LocalDataSource(testCases);
          story['executing'] = false;
          this.userstories.push(story);
          this.loaded_stories += 1;
          if(this.no_of_stories == this.loaded_stories){
            this.executeStories();
            this.intervalTimer();
          }
        });
      })
    });
  }

  executeStories() {
    for(let i = 0;i < this.userstories.length;i++){      
      // this.userstories[this.currentActive].executing = false;  
      // this.userstories[i].executing = true;
      this.executeTestCases(i);
    }
  }

  executeTestCases(index) {
    if(this.userstories[index].testcases && this.userstories[index].testcases.length > 0) {
      for(let x = 0;x < this.userstories[index].testcases.length;x++) {
        // this.userstories[index].testcases[x].execution_status = "RUNNING";
        
        this.addToQue(index, x, this.userstories[index].testcases[x]);
      }
    }
  }

  addToQue(story_id, tc_id, testcase) {
    this.execution_que.push({
      story: story_id,
      tc: tc_id,
      testcase: testcase
    });
  }

  removeFromQue() {
    this.execution_que.pop();
  }





}
