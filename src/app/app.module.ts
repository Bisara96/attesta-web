import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialStuffModule } from './app-material-stuff.module';
import { AppNavBarComponent } from './app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialStuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
