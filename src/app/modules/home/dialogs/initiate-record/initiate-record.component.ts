import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-initiate-record',
  templateUrl: './initiate-record.component.html',
  styleUrls: ['./initiate-record.component.scss']
})
export class InitiateRecordComponent implements OnInit {

  @Input() id: number;

  constructor(private mainService: MainService,protected dialogRef: NbDialogRef<InitiateRecordComponent>) { }

  url: string = '';

  ngOnInit() {
  }

  recordUserStory() {
    let id = 1;
    this.mainService.initiateRecording(this.url,this.id)
    .subscribe(result => console.log(result));
  }

  close() {
    this.dialogRef.close();
  }

}
