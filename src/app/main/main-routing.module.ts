import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestcasesHomeComponent } from './testcases-home/testcases-home.component';
import { ExecutorHomeComponent } from './executor-home/executor-home.component';
import { ReportsHomeComponent } from './reports-home/reports-home.component';
import { ViewScreenshotComponent } from './view-screenshot/view-screenshot.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'testcases', component: TestcasesHomeComponent },
  { path: 'executor', component: ExecutorHomeComponent },
  { path: 'reports', component: ReportsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
