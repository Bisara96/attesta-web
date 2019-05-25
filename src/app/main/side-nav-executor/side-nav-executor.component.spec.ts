import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavExecutorComponent } from './side-nav-executor.component';

describe('SideNavExecutorComponent', () => {
  let component: SideNavExecutorComponent;
  let fixture: ComponentFixture<SideNavExecutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavExecutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
