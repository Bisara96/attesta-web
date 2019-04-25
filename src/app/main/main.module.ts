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
import { TestCasesComponent } from './test-cases/test-cases.component';
import { TreeModule } from 'angular-tree-component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { SideNavTestcasesComponent } from './side-nav-testcases/side-nav-testcases.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TestcasesHomeComponent } from './testcases-home/testcases-home.component';
import { StoryTestCasesComponent } from './story-test-cases/story-test-cases.component';
import { TestCaseDetailsComponent } from './test-case-details/test-case-details.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserstoryListComponent,
    UserstoryTestStepsComponent,
    UserstoryAcceptanceCriteriaComponent,
    InitiateRecordComponent,
    TestCasesComponent,
    SideNavComponent,
    SideNavContentComponent,
    SideNavTestcasesComponent,
    TestcasesHomeComponent,
    StoryTestCasesComponent,
    TestCaseDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MainMaterialStuffModule,
    HttpClientModule,
    FormsModule,
    TreeModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  entryComponents: [
    InitiateRecordComponent
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }