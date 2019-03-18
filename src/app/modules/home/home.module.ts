/* Modules */
import { HomeRoutingModule } from './home-routing.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { HomeComponent } from './pages/home/home.component';
import { NgbCompsModule } from 'src/app/ngb-comps.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCompsModule
  ]
})
export class HomeModule { }
