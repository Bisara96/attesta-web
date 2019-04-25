import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcasesHomeComponent } from './testcases-home.component';

describe('TestcasesHomeComponent', () => {
  let component: TestcasesHomeComponent;
  let fixture: ComponentFixture<TestcasesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcasesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcasesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
