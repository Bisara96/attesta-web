import { UserStory } from './../entities/userstory';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-userstory-test-steps',
  templateUrl: './userstory-test-steps.component.html',
  styleUrls: ['./userstory-test-steps.component.scss']
})
export class UserstoryTestStepsComponent implements OnInit {

  @Input() stepsJson: string;

  source: LocalDataSource;

  settings = {
    columns: {
      type: {
        title: 'Type',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      value: {
        title: 'Value',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      xpath: {
        title: 'xpath',
        filter: false,
        type: 'html',
        valuePrepareFunction: function(value){
          return '<div class="customformat"> ' + value + ' </div>' 
        }
      },
      keywords: {
        title: 'Keywords',
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

  constructor() { }

  ngOnInit() {
    this.updateTable();
  }

  updateTable(){
    this.source = new LocalDataSource(JSON.parse(this.stepsJson));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateTable();
  }

}
