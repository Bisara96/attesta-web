import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { MainService } from "../services/main.service";
import { TestStepResultSsViewComponent } from '../test-step-result-ss-view/test-step-result-ss-view.component';

@Component({
  selector: "app-test-case-reports-view",
  templateUrl: "./test-case-reports-view.component.html",
  styleUrls: ["./test-case-reports-view.component.scss"]
})
export class TestCaseReportsViewComponent implements OnInit {
  @Input() testCaseID;

  testCase;

  execInstances = [];
  selectedInstanceID;
  selectedInstance;

  source: LocalDataSource;

  settings = {
    columns: {
      step: {
        title: "Step No",
        filter: false,
        type: "html",
        valuePrepareFunction: function(value) {
          return '<div class="customformat"> ' + value + " </div>";
        }
      },
      type: {
        title: "Type",
        filter: false,
        type: "html",
        valuePrepareFunction: function(value) {
          return '<div class="customformat"> ' + value + " </div>";
        }
      },
      value: {
        title: "Value",
        filter: false,
        type: "html",
        valuePrepareFunction: function(value) {
          return '<div class="customformat"> ' + value + " </div>";
        }
      },
      xpath: {
        title: "Field path",
        filter: false,
        type: "html",
        valuePrepareFunction: function(value) {
          return '<div class="customformat"> ' + value + " </div>";
        }
      },
      expectedResult: {
        title: "Original Screenshot",
        filter: false,
        type: "custom",
        renderComponent: TestStepResultSsViewComponent
      },
      actualResult: {
        title: "Test Step Screenshot",
        filter: false,
        type: "custom",
        renderComponent: TestStepResultSsViewComponent
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };

  data = [];

  constructor(private mainService: MainService) {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.testCase = {};
    this.selectedInstance = null;
    this.selectedInstanceID = -99;
    this.getTestCase();
    this.getTestCaseResults();
  }

  getTestCase() {
    this.mainService.getTestCase(this.testCaseID).subscribe(result => {
      this.testCase = result;
    });
  }

  showImage() {
    console.log('hi');
  }

  getTestCaseResults() {
    this.mainService.getTestCaseResults(this.testCaseID).subscribe(result => {
      this.execInstances = result;
      this.selectedInstance = result[0];
      this.selectedInstanceID = result[0].id;
      this.getTestStepResults();
    });
  }

  selectInstance(inst) {
    this.selectedInstance = inst;
    this.selectedInstanceID = inst.id;
    this.getTestStepResults();
  }

  getTestStepResults() {
    this.data = [];
    this.mainService.getTestStepResults(this.selectedInstanceID).subscribe(result => {
      let count = 1;
      result.forEach(testStepResult => {
        this.data.push({
          step: count + "",
          type: testStepResult.testStep['stepType'],
          value: this.getResultValue(testStepResult.testStep),
          xpath: testStepResult.testStep["uiObject"]["xpath"],
          expectedResult: testStepResult.testStep["screenshot"],
          actualResult: 'data:image/jpeg;base64,'+testStepResult["screenshot"]
        });
        count++;
      });
      this.source = new LocalDataSource(this.data);
    });
  }

  getResultValue(testStep) {
    switch(testStep['stepType'].toLowerCase()){
      case "type":
        return testStep['value'];
      case "select":
        return testStep['selectedOption'] ;
      default:
        return "";   
    } 
  }

  getElementName(uiObject): string {
    if (uiObject["label"] && uiObject["label"] != "") {
      return uiObject["label"];
    } else if (uiObject["name"] && uiObject["name"] != "") {
      return uiObject["name"];
    } else if (uiObject["placeholder"] && uiObject["placeholder"] != "") {
      return uiObject["placeholder"];
    } else if (uiObject["innerText"] && uiObject["innerText"] != "") {
      return uiObject["innerText"];
    }

    return uiObject["xpath"];
  }
}
