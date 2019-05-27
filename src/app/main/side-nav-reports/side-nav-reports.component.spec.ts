import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavReportsComponent } from './side-nav-reports.component';

describe('SideNavReportsComponent', () => {
  let component: SideNavReportsComponent;
  let fixture: ComponentFixture<SideNavReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
