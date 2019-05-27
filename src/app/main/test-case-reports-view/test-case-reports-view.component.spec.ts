import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCaseReportsViewComponent } from './test-case-reports-view.component';

describe('TestCaseReportsViewComponent', () => {
  let component: TestCaseReportsViewComponent;
  let fixture: ComponentFixture<TestCaseReportsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCaseReportsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCaseReportsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
