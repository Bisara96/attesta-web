import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatExpansionModule, MatFormFieldModule, MatTabsModule, MatListModule, MatChipsModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    Ng2SmartTableModule,
    MatListModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    Ng2SmartTableModule,
    MatListModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule  
  ]
})
export class MainMaterialStuffModule { }
