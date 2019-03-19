import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { InitiateRecordComponent } from '../../dialogs/initiate-record/initiate-record.component';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  ngOnInit() {
  }

  userStories: { description: string, status: string }[] = [
    { description: 'Carla Espinosa', status: 'Implemented' },
    { description: 'Bob Kelso', status: 'New' },
    { description: 'Janitor', status: 'In Progress' },
    { description: 'Perry Cox', status: 'Implemented' },
    { description: 'Ben Sullivan', status: 'In Progress' },
  ];

  open() {
    this.dialogService.open(InitiateRecordComponent);
  }

  play() {
    
  }



}
