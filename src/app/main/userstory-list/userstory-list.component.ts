import { AddUserStoryComponent } from "./../add-user-story/add-user-story.component";
import { MainService } from "./../services/main.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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
export class UserstoryListComponent implements OnInit {
  userStories: UserStory[] = [];

  trackByIndex = index => index;

  constructor(private mainService: MainService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadUserStories();
  }

  loadUserStories() {
    this.mainService
      .getUserStories()
      .subscribe(result => this.setUSListData(result));
  }

  setUSListData(stories: UserStory[]) {
    this.userStories = stories;
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

  addCard() {
    this.dialog
      .open(AddUserStoryComponent, {
        width: "500px",
        panelClass: "add-story-dialog"
      })
      .afterClosed()
      .subscribe(result => {});
  }

  deleteCard(i) {
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
          input: "url",
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
                showConfirmButton: false
              });
              Swal.clickConfirm();
              this.mainService
                .initiateRecording(result, id)
                .subscribe(result => {
                  Swal.insertQueueStep({
                    type: "success",
                    title: "Test Cases Generated",
                    text: "Test Cases are generated and ready to be executed!",
                    showCancelButton: false,
                    showConfirmButton: false
                  });
                  Swal.clickConfirm();
                });
            });
            // Swal.clickConfirm();
          }
        }
      ])
      .then(result => {
        if (result.value) {
          Swal.fire({
            title: "All done!",
            html:
              "Your answers: <pre><code>" +
              JSON.stringify(result.value) +
              "</code></pre>",
            confirmButtonText: "Lovely!"
          });
        }
      });
  }
}
