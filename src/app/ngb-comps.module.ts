import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbListModule, NbCardModule, NbActionsModule, NbSearchModule, NbButtonModule, NbDialogModule, NbInputModule, NbAccordionModule, NbLayoutModule, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forChild({hasBackdrop: true, closeOnBackdropClick: false}),
    NbInputModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbTabsetModule
  ],
  exports: [
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule,
    NbInputModule,
    Ng2SmartTableModule,
    NbLayoutModule,
    NbTabsetModule
  ]
})
export class NgbCompsModule { }
