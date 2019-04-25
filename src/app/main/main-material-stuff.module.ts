import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatExpansionModule, MatFormFieldModule, MatTabsModule, MatListModule, MatChipsModule, MatToolbarModule, MatButtonModule, MatDialogModule, MatInputModule, MatCardModule, MatGridListModule, MatMenuModule, MatStepperModule, MatIconModule, MatSidenavModule, MatBadgeModule } from '@angular/material';

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
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule
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
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule
  ]
})
export class MainMaterialStuffModule { }
