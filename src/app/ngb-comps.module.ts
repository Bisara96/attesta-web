import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbThemeModule, NbLayoutModule, NbListModule, NbCardModule, NbActionsModule, NbSearchModule, NbButtonModule, NbDialogModule, NbInputModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forChild({hasBackdrop: true, closeOnBackdropClick: false}),
    NbInputModule
  ],
  exports: [
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule,
    NbInputModule
  ]
})
export class NgbCompsModule { }
