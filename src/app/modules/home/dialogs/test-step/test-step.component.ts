import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { UserStory } from '../../models/userstory';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-test-step',
  templateUrl: './test-step.component.html',
  styleUrls: ['./test-step.component.scss']
})
export class TestStepComponent implements OnInit {

  @Input() userStory: UserStory;

  source: LocalDataSource;

  acceptanceCriteria = [];

  settings = {
    columns: {
      type: {
        title: 'Type',
        filter: false
      },
      value: {
        title: 'Value',
        filter: false
      },
      xpath: {
        title: 'xpath',
        filter: false
      },
      keywords: {
        title: 'Keywords',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

  test = [
    {
      type: "click",
      xpath: "wddw",
      keywords: "wws",
      keycode: 1,
      value: "admin"
    }
  ]

  constructor(protected dialogRef: NbDialogRef<TestStepComponent>) { }

  ngOnInit() {
    this.source = new LocalDataSource(JSON.parse(this.userStory.stepsJson));
    console.log(JSON.parse(this.userStory.acceptanceCriteria));
    this.acceptanceCriteria = JSON.parse(this.userStory.acceptanceCriteria);
  }

}
