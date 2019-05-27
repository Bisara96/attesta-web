import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { UserStory } from '../entities/UserStory';

@Component({
  selector: 'app-test-cases',
  templateUrl: './test-cases.component.html',
  styleUrls: ['./test-cases.component.scss']
})
export class TestCasesComponent implements OnInit {

  userStories: UserStory[];

  // nodes = [
  //   {
  //     id: 1,
  //     name: 'root1',
  //     children: [
  //       { id: 2, name: 'child1' },
  //       { id: 3, name: 'child2' }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     name: 'root2',
  //     children: [
  //       { id: 5, name: 'child2.1' },
  //       {
  //         id: 6,
  //         name: 'child2.2',
  //         children: [
  //           { id: 7, name: 'subsub' }
  //         ]
  //       }
  //     ]
  //   }
  // ];
  // options = {};

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.loadUserStories();
  }

  loadUserStories() {
    // this.mainService
    //   .getUserStories()
    //   .subscribe(result => this.setUSListData(result));
  }

  setUSListData(stories: UserStory[]) {
    this.userStories = stories;
  }

}
