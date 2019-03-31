import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstoryAcceptanceCriteriaComponent } from './userstory-acceptance-criteria.component';

describe('UserstoryAcceptanceCriteriaComponent', () => {
  let component: UserstoryAcceptanceCriteriaComponent;
  let fixture: ComponentFixture<UserstoryAcceptanceCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstoryAcceptanceCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstoryAcceptanceCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
