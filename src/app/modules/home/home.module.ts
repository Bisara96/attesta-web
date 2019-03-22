/* Modules */
import { HomeRoutingModule } from './home-routing.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

/* Components */
import { HomeComponent } from './pages/home/home.component';
import { NgbCompsModule } from 'src/app/ngb-comps.module';
import { InitiateRecordComponent } from './dialogs/initiate-record/initiate-record.component';
import { MainService } from './main.service';
import { TestStepComponent } from './dialogs/test-step/test-step.component';

@NgModule({
  declarations: [
    HomeComponent,
    InitiateRecordComponent,
    TestStepComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCompsModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    InitiateRecordComponent,
    TestStepComponent
  ],
  providers: [
    MainService
  ]
})
export class HomeModule { }
