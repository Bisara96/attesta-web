import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-initiate-record',
  templateUrl: './initiate-record.component.html',
  styleUrls: ['./initiate-record.component.scss']
})
export class InitiateRecordComponent implements OnInit {

  constructor(private mainService: MainService) { }

  url: string = '';

  ngOnInit() {
  }

  recordUserStory() {
    this.mainService.initiateRecording(this.url)
    .subscribe(result => console.log(result));
  }

}
