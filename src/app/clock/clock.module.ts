import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockComponent } from './clock.component';
import { ClockService } from './clock.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ClockComponent
  ],
  providers: [ClockService],
  exports: [ClockComponent]
})
export class ClockModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ClockModule,
      providers: [ClockService]
    }}
