import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountDownModule } from './countdown/countdow.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CountDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
