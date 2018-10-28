import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberTransformPipe } from './pipes/number-transform/number-transform.pipe';
import { CountDownComponent } from './countdown.component';

@NgModule({
  declarations: [
    CountDownComponent,
    NumberTransformPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountDownComponent
  ]
})
export class CountDownModule { }
