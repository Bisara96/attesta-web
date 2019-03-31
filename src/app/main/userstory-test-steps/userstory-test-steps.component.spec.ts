import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryTestStepsComponent } from './userstory-test-steps.component';

describe('UserstoryTestStepsComponent', () => {
  let component: UserstoryTestStepsComponent;
  let fixture: ComponentFixture<UserstoryTestStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoryTestStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoryTestStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
