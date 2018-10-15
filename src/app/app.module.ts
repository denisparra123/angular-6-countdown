import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NumberTransformPipe } from './countdown/pipes/number-transform/number-transform.pipe';
import { CountDownComponent } from './countdown/countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberTransformPipe,
    CountDownComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
