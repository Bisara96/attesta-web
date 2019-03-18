import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbListModule, NbCardModule, NbActionsModule, NbSearchModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    NbActionsModule,
    NbSearchModule
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    NbActionsModule,
    NbSearchModule
  ]
})
export class NgbCompsModule { }
