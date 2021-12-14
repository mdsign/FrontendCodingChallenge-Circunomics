import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule,
  NbDialogModule,
  NbLayoutModule,
  NbSpinnerModule,
  NbCardModule,
  NbListModule,
  NbIconModule,
  NbTooltipModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule.forRoot(),
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbSpinnerModule,
    NbCardModule,
    NbListModule,
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule,
  ],
  exports: [
    NbThemeModule,
    NbDialogModule,
    NbLayoutModule,
    NbSpinnerModule,
    NbCardModule,
    NbListModule,
    NbEvaIconsModule,
    NbIconModule,
    NbTooltipModule,
  ],
})
export class CoreModule {}
