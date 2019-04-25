import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav-testcases',
  templateUrl: './side-nav-testcases.component.html',
  styleUrls: ['./side-nav-testcases.component.css']
})
export class SideNavTestcasesComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    nodes = [
      {
        id: 1,
        name: 'Story 1',
        children: [
          { name: 'Test Case 1' },
          { name: 'Test Case 2' },
          { name: 'Test Case 3' },
          { name: 'Test Case 4' },
          { name: 'Test Case 5' },
          { name: 'Test Case 6' }
        ]
      },
      {
        id: 2,
        name: 'Story 2',
        children: [
          { name: 'Test Case 1' },
          { name: 'Test Case 2' },
          { name: 'Test Case 3' },
          { name: 'Test Case 4' },
          { name: 'Test Case 5' },
          { name: 'Test Case 6' }
        ]
      }
    ];
    options = {};

    isStoryView = false;
    isTestCaseView = false;

    constructor(private breakpointObserver: BreakpointObserver) {}

}
