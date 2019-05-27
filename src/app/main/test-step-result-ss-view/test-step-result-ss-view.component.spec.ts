import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStepResultSsViewComponent } from './test-step-result-ss-view.component';

describe('TestStepResultSsViewComponent', () => {
  let component: TestStepResultSsViewComponent;
  let fixture: ComponentFixture<TestStepResultSsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStepResultSsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStepResultSsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
