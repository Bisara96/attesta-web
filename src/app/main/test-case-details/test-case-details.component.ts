import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-test-case-details',
  templateUrl: './test-case-details.component.html',
  styleUrls: ['./test-case-details.component.scss']
})
export class TestCaseDetailsComponent implements OnChanges, OnInit {

  @Input() testCaseID;

  testCase;

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
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

  data = [];

  constructor(private mainService: MainService) { 
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.testCase = {};
    this.getTestCase();
  }

  getTestCase() {
    this.mainService.getTestCase(this.testCaseID).subscribe(result => {
      this.testCase = result;
      this.getTestCaseSteps();
    });
  }

  getTestCaseSteps() {
    let count = 1;
    this.data = [];
    this.mainService.getTestCaseSteps(this.testCaseID).subscribe(result => {
      result.forEach(testCStep => {
        this.data.push(
          {
            step: count+'',
            testStep: testCStep.testStep['stepType']+' '+this.getElementName(testCStep.testStep['uiObject']),
            testData: testCStep.testStep['value'],
            expectedResult: testCStep['expectedResult']
          }
        );
        count++;
      });
      this.source = new LocalDataSource(this.data);
    })
  }

  getElementName(uiObject): string {
    if(uiObject['label'] && uiObject['label'] != ''){
      return uiObject['label'];
    } else if(uiObject['placeholder'] && uiObject['placeholder'] != ''){
      return uiObject['placeholder'];
    } else if(uiObject['innerText'] && uiObject['innerText'] != ''){
      return uiObject['innerText'];
    } else if(uiObject['name'] && uiObject['name'] != ''){
      return uiObject['name'];
    }

    return uiObject['xpath'];
  }

}
