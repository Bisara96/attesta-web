import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.scss']
})
export class TestCaseDetailsComponent implements OnInit {

  source: LocalDataSource;

  settings = {
    columns: {
      step: {
        title: 'Step',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      testStep: {
        title: 'Test Step',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      testData: {
        title: 'Test Data',
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
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

  data = [
    // {
    //   step:'1',
    //   testStep:'Enter Username',
    //   testData:'user1234',
    //   expectedResult:'PASS',
    //   actualResult:'PASS',
    //   status:'PASS'
    // },
    {
      step:'1',
      testStep:'Enter Password',
      testData:'1234@abcd',
      expectedResult:'PASS',
      actualResult:'PASS',
      status:'PASS'
    },
    {
      step:'2',
      testStep:'Click Login',
      testData:'',
      expectedResult:'FAIL',
      actualResult:'FAIL',
      status:'PASS'
    }
    
  ];

  constructor() { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

}







// {
//   step:'1',
//   testStep:'Enter Username',
//   testData:'user1234',
//   expectedResult:'PASS',
//   actualResult:'PASS',
//   status:'PASS'
// },
// {
//   step:'2',
//   testStep:'Enter Password',
//   testData:'1234@abcd',
//   expectedResult:'PASS',
//   actualResult:'PASS',
//   status:'PASS'
// },
// {
//   step:'3',
//   testStep:'Click Login',
//   testData:'',
//   expectedResult:'FAIL',
//   actualResult:'FAIL',
//   status:'PASS'
// },
// {
//   step:'4',
//   testStep:'Password should be entered',
//   testData:'Password is not entered',
//   expectedResult:'FAIL',
//   actualResult:'FAIL',
//   status:'PASS'
// }
