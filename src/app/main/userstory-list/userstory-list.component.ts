import { MainService } from './../services/main.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserStory } from '../entities/UserStory';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDialog } from '@angular/material';
import { InitiateRecordComponent } from '../dialogs/initiate-record/initiate-record.component';

@Component({
  selector: 'app-userstory-list',
  templateUrl: './userstory-list.component.html',
  styleUrls: ['./userstory-list.component.scss']
})
export class UserstoryListComponent implements OnInit {

  userStories: UserStory[] = [];

  trackByIndex = index => index;

  constructor(private mainService: MainService,private dialog: MatDialog) { }

  ngOnInit() {
    this.loadUserStories();
  }

  loadUserStories() {
    this.mainService.getUserStories()
    .subscribe(result => this.setUSListData(result));
  }

  setUSListData(stories: UserStory[]) {
    this.userStories = stories;
  }

  executeUserStory(id: string) {
    this.mainService.executeUserStory(id)
    .subscribe(result => console.log(result));
  }

  openRecordDialog(id: number) {
    this.dialog.open(InitiateRecordComponent, {
      width: '250px',
      data: {
        id: id
      }
    }).afterClosed().subscribe(result => {
      this.recordUserStory(result.url, result.id)
    });
  }

  recordUserStory(url: string, id: number) {
    this.mainService.initiateRecording(url,id)
    .subscribe();
  }

  refreshUserStory(id: number, index: number) {
    this.mainService.getUserStory(id)
    .subscribe(result => this.updateTestStepTable(result, index));
  }

  updateTestStepTable(userStory: UserStory, index: number) {
    this.userStories[index] = userStory;
  }

}
