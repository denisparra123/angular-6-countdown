import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCustomTemplate = true;
  days;
  hours;
  minutes;
  seconds;
  backgroundColor = 'red';
  textColor = 'black';

  onDaysChanged(days) {
    this.days = days;
  }

  onHoursChanged(hours) {
    this.hours = hours;
  }

  onMinutesChanged(minutes) {
    this.minutes = minutes;
  }

  onSecondsChanged(seconds) {
    this.seconds = seconds;
  }

}
