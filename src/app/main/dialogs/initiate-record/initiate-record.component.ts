import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-initiate-record',
  templateUrl: './initiate-record.component.html',
  styleUrls: ['./initiate-record.component.scss']
})
export class InitiateRecordComponent {
  
  id: number;
  url: string;

  constructor(public dialogRef: MatDialogRef<InitiateRecordComponent>,@Inject(MAT_DIALOG_DATA) public data) { 
    this.id = data.id;
  }

  start(): void {
    this.dialogRef.close({
      id: this.id,
      url: this.url
    });
  }

}
