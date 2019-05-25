import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-story-test-cases',
  templateUrl: './story-test-cases.component.html',
  styleUrls: ['./story-test-cases.component.scss']
})
export class StoryTestCasesComponent{

  @Input() storyID;

  source: LocalDataSource;

  settings = {
    columns: {
      ID: {
        title: 'Test Case ID',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      scenario: {
        title: 'Test Case Scenario',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      testCase: {
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
        title: 'Actual Result',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      status: {
        title: 'Status',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      actions: {
        title: 'Actions',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<button mat-raised-button><i class="fas fa-play"></i></button>' 
        }
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

  data = [
    {
      ID:'TC_01',
      scenario:'Username should be entered',
      testCase:'Username is entered',
      expectedResult:'PASS',
      actualResult:'PASS',
      status:'PASS',
      actions:''
    },
    {
      ID:'TC_02',
      scenario:'Username should be entered',
      testCase:'Username is not entered',
      expectedResult:'PASS',
      actualResult:'PASS',
      status:'PASS',
      actions:''
    },
    {
      ID:'TC_03',
      scenario:'Password should be entered',
      testCase:'Password is entered',
      expectedResult:'FAIL',
      actualResult:'FAIL',
      status:'PASS',
      actions:''
    },
    {
      ID:'TC_04',
      scenario:'Password should be entered',
      testCase:'Password is not entered',
      expectedResult:'FAIL',
      actualResult:'FAIL',
      status:'PASS',
      actions:''
    }
    
  ];

  constructor(private mainService: MainService) { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

}
