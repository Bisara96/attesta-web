import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userStories: { description: string, status: string }[] = [
    { description: 'Carla Espinosa', status: 'Implemented' },
    { description: 'Bob Kelso', status: 'New' },
    { description: 'Janitor', status: 'In Progress' },
    { description: 'Perry Cox', status: 'Implemented' },
    { description: 'Ben Sullivan', status: 'In Progress' },
  ];

}
