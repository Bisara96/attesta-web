import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryTestCasesComponent } from './story-test-cases.component';

describe('StoryTestCasesComponent', () => {
  let component: StoryTestCasesComponent;
  let fixture: ComponentFixture<StoryTestCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryTestCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryTestCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
