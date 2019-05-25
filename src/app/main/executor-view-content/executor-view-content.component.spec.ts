import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorViewContentComponent } from './executor-view-content.component';

describe('ExecutorViewContentComponent', () => {
  let component: ExecutorViewContentComponent;
  let fixture: ComponentFixture<ExecutorViewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutorViewContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
