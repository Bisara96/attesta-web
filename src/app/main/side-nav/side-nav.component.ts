import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  projectList = [];
  sprints = [];
  selectedProject;
  selectedSprint;
  selectedSprintID;
  showStories = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private mainService: MainService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.mainService.getProjects().subscribe(result => {
      this.projectList = result;
      if(this.projectList.length > 0) {
        this.getProjectSprints(this.projectList[0]);
      }
    })
  }

  getProjectSprints(project) {
    this.selectedProject = project;
    this.mainService.getProjectSprints(project.id).subscribe(result => {
      this.sprints = result;
      if(result.length > 0) {
        this.selectSprint(result[result.length - 1])
      }
    });
  }

  selectSprint(sprint) {
    this.showStories = true;
    this.selectedSprint = sprint;
    this.selectedSprintID = sprint.id;
  }

}
