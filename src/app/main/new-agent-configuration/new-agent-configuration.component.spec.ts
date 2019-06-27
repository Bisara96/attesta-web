import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAgentConfigurationComponent } from './new-agent-configuration.component';

describe('NewAgentConfigurationComponent', () => {
  let component: NewAgentConfigurationComponent;
  let fixture: ComponentFixture<NewAgentConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAgentConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAgentConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
