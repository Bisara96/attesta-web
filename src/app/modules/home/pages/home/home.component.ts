import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { InitiateRecordComponent } from '../../dialogs/initiate-record/initiate-record.component';
import { MainService } from '../../main.service';
import { UserStory } from '../../models/userstory';
import { LocalDataSource } from 'ng2-smart-table';
import { TestStepComponent } from '../../dialogs/test-step/test-step.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userStories: UserStory[] = [];
  source: LocalDataSource;

  settings = {
    columns: {
      description: {
        title: 'Description',
        width: '60%',
        filter: false
      },
      status: {
        title: 'Status',
        width: '40%',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    }
  };

  constructor(private dialogService: NbDialogService, private mainService: MainService) { }

  ngOnInit() {
    this.loadUserStories();
  }

  loadUserStories() {
    this.mainService.getUserStories()
    .subscribe(result => this.setUSTableData(result));
  }

  setUSTableData(stories: UserStory[]) {
    this.source = new LocalDataSource(stories);
    this.userStories = stories;
  }

  executeUserStory(id: string) {
    this.mainService.executeUserStory(id)
    .subscribe(result => console.log(result));
  }

  openRecordDialog(id: number) {
    this.dialogService.open(InitiateRecordComponent, {
      context: {
        id: id,
      },
    });
  }

  showTestSteps(story: UserStory) {
    this.dialogService.open(TestStepComponent, {
      context: {
        userStory: story,
      },
    });
  }

}
