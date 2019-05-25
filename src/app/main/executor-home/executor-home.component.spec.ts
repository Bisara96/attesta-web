import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutorHomeComponent } from './executor-home.component';

describe('ExecutorHomeComponent', () => {
  let component: ExecutorHomeComponent;
  let fixture: ComponentFixture<ExecutorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
