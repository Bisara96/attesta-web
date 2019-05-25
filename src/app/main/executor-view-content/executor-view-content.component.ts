import { LocalDataSource } from 'ng2-smart-table';
import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-executor-view-content',
  templateUrl: './executor-view-content.component.html',
  styleUrls: ['./executor-view-content.component.scss']
})
export class ExecutorViewContentComponent implements OnInit {

  // @ViewChild('table')
  // smartTable: ;

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
        title: 'Actual Result',
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
      },
      actions: {
        title: 'Actions',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<button mat-raised-button><i class="fas fa-play" (click)="executeTestCase()"></i></button>' 
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

  constructor(private mainService: MainService) { 
  }

  ngOnInit() {
    this.loadUserStories();
  }

  loadUserStories() {
    this.mainService
      .getUserStories()
      .subscribe(result => this.stories = result);
  }

  getStoryTestCases(index,story_id) {
    if(this.stories[index].testCases && this.stories[index].testCases.length > 0){
      this.loadTestCasesData(index);
      return;
    }
    this.mainService.getTestCases(story_id).subscribe(result => {
      this.stories[index].testCases = result;
      this.loadTestCasesData(index);
    });
  }

  loadTestCasesData(index) {
    this.source = new LocalDataSource(this.stories[index]['testCases']);
  }

  executeTestCase(event) {
    this.mainService.executeTestCase(event.data.id).subscribe(result => {
      console.log(result);
    });
  }

}
