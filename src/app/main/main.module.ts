import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { UserstoryListComponent } from './userstory-list/userstory-list.component';
import { MainService } from './services/main.service';
import { MainMaterialStuffModule } from './main-material-stuff.module';
import { HttpClientModule } from '@angular/common/http';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
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
import { AddUserStoryComponent } from './add-user-story/add-user-story.component';
import { ExecutorHomeComponent } from './executor-home/executor-home.component';
import { SideNavExecutorComponent } from './side-nav-executor/side-nav-executor.component';
import { ExecutorViewContentComponent } from './executor-view-content/executor-view-content.component';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { SideNavReportsComponent } from './side-nav-reports/side-nav-reports.component';
import { TestCaseReportsViewComponent } from './test-case-reports-view/test-case-reports-view.component';
import { ViewScreenshotComponent } from './view-screenshot/view-screenshot.component';
import { TestStepResultSsViewComponent } from './test-step-result-ss-view/test-step-result-ss-view.component';

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
    TestCaseDetailsComponent,
    AddUserStoryComponent,
    ExecutorHomeComponent,
    SideNavExecutorComponent,
    ExecutorViewContentComponent,
    ReportsHomeComponent,
    SideNavReportsComponent,
    TestCaseReportsViewComponent,
    ViewScreenshotComponent,
    TestStepResultSsViewComponent
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
    MatListModule,
    ImageViewerModule
  ],
  entryComponents: [
    InitiateRecordComponent,
    AddUserStoryComponent,
    TestStepResultSsViewComponent,
    ViewScreenshotComponent
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }