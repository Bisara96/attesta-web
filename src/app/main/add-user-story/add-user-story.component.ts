import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-user-story',
  templateUrl: './add-user-story.component.html',
  styleUrls: ['./add-user-story.component.scss']
})
export class AddUserStoryComponent implements OnInit {

  selected = "new";
  acList = [];
  newAC = "";

  constructor(public dialogRef: MatDialogRef<AddUserStoryComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  addAC(ac) {
    this.acList.push(ac);
    this.newAC = "";
  }

}
