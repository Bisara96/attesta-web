import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbListModule, NbCardModule, NbActionsModule, NbSearchModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    NbActionsModule,
    NbSearchModule,
    NbButtonModule
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    NbActionsModule,
    NbSearchModule,
    NbButtonModule
  ]
})
export class NgbCompsModule { }
