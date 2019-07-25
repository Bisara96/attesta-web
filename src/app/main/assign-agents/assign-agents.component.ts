import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddUserStoryComponent } from '../add-user-story/add-user-story.component';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-assign-agents',
  templateUrl: './assign-agents.component.html',
  styleUrls: ['./assign-agents.component.scss']
})
export class AssignAgentsComponent implements OnInit {

  removable = true;
  storyID;
  storyAgents: any[];
  agents: any[];
  cancelable: true;

  constructor(public dialogRef: MatDialogRef<AddUserStoryComponent>,
    private mainService: MainService,@Inject(MAT_DIALOG_DATA) public data: any) { 
      this.storyID = data.storyID;
      this.cancelable = data.cancelable;
    }

  ngOnInit() {
    this.getStoryAgents();
    this.getAgents();
  }

  getStoryAgents() {
    this.mainService.getAssignedAgents(this.storyID).subscribe(result => this.storyAgents = result);
  }

  getAgents() {
    this.mainService.getUNAssignedAgents(this.storyID).subscribe(result => this.agents = result);
  }

  assignAgent(agent,index) {
    this.mainService.assignAgent(this.storyID, agent.id).subscribe(result => {
      this.storyAgents.push(agent);
      this.agents.splice(index, 1);
    });
  }

  unassignAgent(agent,index) {
    this.mainService.unassignAgent(this.storyID, agent.id).subscribe(result => {
      this.agents.push(agent);
      this.storyAgents.splice(index, 1);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
