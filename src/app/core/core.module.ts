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
  NbButtonModule,
  NbButtonGroupModule,
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
    NbButtonModule,

    NbButtonGroupModule
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
    NbButtonModule,
    NbButtonGroupModule
  ],
})
export class CoreModule {}
