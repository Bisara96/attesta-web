import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcaseExecutionStatusIndicatorComponent } from './testcase-execution-status-indicator.component';

describe('TestcaseExecutionStatusIndicatorComponent', () => {
  let component: TestcaseExecutionStatusIndicatorComponent;
  let fixture: ComponentFixture<TestcaseExecutionStatusIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcaseExecutionStatusIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcaseExecutionStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
