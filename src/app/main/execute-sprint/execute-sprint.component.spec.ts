import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteSprintComponent } from './execute-sprint.component';

describe('ExecuteSprintComponent', () => {
  let component: ExecuteSprintComponent;
  let fixture: ComponentFixture<ExecuteSprintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteSprintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
