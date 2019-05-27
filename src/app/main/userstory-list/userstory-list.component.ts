import { AddUserStoryComponent } from "./../add-user-story/add-user-story.component";
import { MainService } from "./../services/main.service";
import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from "@angular/core";
import { UserStory } from "../entities/UserStory";
import { LocalDataSource } from "ng2-smart-table";
import { MatDialog } from "@angular/material";
import { InitiateRecordComponent } from "../dialogs/initiate-record/initiate-record.component";
import { cardAnimation, plusAnimation } from "./animations";
import Swal from "sweetalert2";

@Component({
  selector: "app-userstory-list",
  templateUrl: "./userstory-list.component.html",
  styleUrls: ["./userstory-list.component.scss"],
  animations: [cardAnimation, plusAnimation]
})
export class UserstoryListComponent implements OnChanges, OnInit {
  userStories: UserStory[] = [];
  @Input() sprintID;

  trackByIndex = index => index;
  finishedRecording = false;

  constructor(private mainService: MainService, private dialog: MatDialog) {}

  ngOnInit() {
    // this.loadUserStories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadUserStories();
  }

  loadUserStories() {
    this.mainService
      .getUserStories(this.sprintID)
      .subscribe(result => this.setUSListData(result));
  }

  setUSListData(stories: UserStory[]) {
    this.userStories = [];
    this.userStories = stories;
    // this.userStories = this.userStories.concat(stories);
    // this.userStories = this.userStories.concat(stories);
    // this.userStories = this.userStories.concat(stories);
    // this.userStories = this.userStories.concat(stories);
    // this.userStories = this.userStories.concat(stories);
  }

  executeUserStory(id: string) {
    this.mainService
      .executeUserStory(id)
      .subscribe(result => console.log(result));
  }

  openRecordDialog(id: number) {
    this.dialog
      .open(InitiateRecordComponent, {
        width: "250px",
        data: {
          id: id
        }
      })
      .afterClosed()
      .subscribe(result => {
        this.recordUserStory(result.url, result.id);
      });
  }

  recordUserStory(url: string, id: number) {
    this.mainService.initiateRecording(url, id).subscribe();
  }

  refreshUserStory(id: number, index: number) {
    this.mainService
      .getUserStory(id)
      .subscribe(result => this.updateTestStepTable(result, index));
  }

  updateTestStepTable(userStory: UserStory, index: number) {
    this.userStories[index] = userStory;
  }

  addStory() {
    this.dialog
      .open(AddUserStoryComponent, {
        width: "500px",
        height: "1000px",
        panelClass: "add-story-dialog",
        data: {
          sprint: this.sprintID
        }
      })
      .afterClosed()
      .subscribe(result => {
        if(result.id) {
          this.userStories.push(result);
        }
      });
  }

  deleteStory(i) {
    this.userStories.splice(i, 1);
  }

  openGenerateTCDialog(id: number) {
    Swal.mixin({
      progressSteps: ["1", "2", "3", "4"]
    })
      .queue([
        {
          title: "Locate",
          text: "Tell us where the implementation is done",
          input: "text",
          confirmButtonText: "Next &rarr;",
          showCancelButton: true,
          preConfirm: result => {
            Swal.insertQueueStep({
              imageUrl: "assets/images/ajax-loader1.gif",
              title: "Recording",
              text: "Recorder starting at " + result,
              showCancelButton: false,
              showConfirmButton: false
            });
            this.mainService.initiateRecording(result, id).subscribe(result => {
              Swal.insertQueueStep({
                imageUrl: "assets/images/ajax-loader1.gif",
                title: "Generating Test Cases",
                text: "Standy by, generating test cases...",
                showCancelButton: false,
                showConfirmButton: false,
              });

              setTimeout(() => { 
                Swal.clickConfirm();
                Swal.insertQueueStep({
                type: "success",
                title: "Test Cases Generated",
                text: "Test Cases are generated and ready to be executed!",
                showCancelButton: false,
                showConfirmButton: true
              }); }, 15000);
              Swal.clickConfirm();
              
              // Swal.clickConfirm();
            });
            // Swal.clickConfirm();
          }
        }
      ]);
  }

  checkStatus(id) {
    this.mainService.checkRecordStatus(id).subscribe(result => {
      if (!result) {
        this.finishedRecording = true;
      }
    });
  }
}
