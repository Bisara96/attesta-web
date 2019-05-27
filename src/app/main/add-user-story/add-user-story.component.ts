import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MainService } from "../services/main.service";

@Component({
  selector: "app-add-user-story",
  templateUrl: "./add-user-story.component.html",
  styleUrls: ["./add-user-story.component.scss"]
})
export class AddUserStoryComponent implements OnInit {
  selected = "new";
  acList = [];
  newAC = "";
  description;
  sprintID;

  constructor(
    public dialogRef: MatDialogRef<AddUserStoryComponent>,
    private mainService: MainService,@Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.sprintID = data.sprint;
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  addAC(ac) {
    if (ac !== "") this.acList.push(ac);
    this.newAC = "";
  }

  dropAC(index) {
    this.acList.splice(index, 1);
  }

  save() {
    let story = {
      description: this.description,
      status: this.selected.toUpperCase(),
      acList: this.acList,
      sprint: this.sprintID
    };
    this.mainService.addStory(story).subscribe(result => {
      console.log(JSON.stringify(result));
      this.dialogRef.close(result);
    });
  }
}
