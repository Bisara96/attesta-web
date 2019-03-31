import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { UserstoryListComponent } from './userstory-list/userstory-list.component';
import { MainService } from './services/main.service';
import { MainMaterialStuffModule } from './main-material-stuff.module';
import { HttpClientModule } from '@angular/common/http';
import { UserstoryTestStepsComponent } from './userstory-test-steps/userstory-test-steps.component';
import { UserstoryAcceptanceCriteriaComponent } from './userstory-acceptance-criteria/userstory-acceptance-criteria.component';
import { InitiateRecordComponent } from './dialogs/initiate-record/initiate-record.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    UserstoryListComponent,
    UserstoryTestStepsComponent,
    UserstoryAcceptanceCriteriaComponent,
    InitiateRecordComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainMaterialStuffModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    InitiateRecordComponent,
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }