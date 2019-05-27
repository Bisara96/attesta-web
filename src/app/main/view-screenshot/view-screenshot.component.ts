import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddUserStoryComponent } from '../add-user-story/add-user-story.component';

@Component({
  selector: 'app-view-screenshot',
  templateUrl: './view-screenshot.component.html',
  styleUrls: ['./view-screenshot.component.scss']
})
export class ViewScreenshotComponent implements OnInit {
  
  image = "";

  constructor(public dialogRef: MatDialogRef<AddUserStoryComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data.image;
   }

  ngOnInit() {
   
  }

}
