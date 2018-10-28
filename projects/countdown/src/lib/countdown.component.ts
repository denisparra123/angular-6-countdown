import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'lib-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() date;
  @Input() title = 'The time remaining is:';
  @Input() daysText = 'Days';
  @Input() hoursText = 'Hours';
  @Input() minutesText = 'Minutes';
  @Input() secondsText = 'Seconds';
  @Input() isCustomTemplate = false;
  @Input() cardBackgroundColor = 'seagreen';
  @Input() cardTextColor = 'white';
  @Output() daysChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() hoursChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() minutesChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() secondsChanged: EventEmitter<number> = new EventEmitter<number>();
  finishDate;
  daysRemaining: number;
  hoursRemaining: number;
  minutesRemaining: number;
  secondsRemaining: number;
  isFinishDate: boolean;

  ngOnInit() {
    this.finishDate = moment(this.date);
    setInterval(() => {
      const today = moment();
      this.daysRemaining = this.finishDate.diff(today, 'days') % 365;
      this.hoursRemaining = this.finishDate.diff(today, 'hours') % 24;
      this.minutesRemaining = this.finishDate.diff(today, 'minutes') % 60;
      this.secondsRemaining = this.finishDate.diff(today, 'seconds') % 60;
      this.daysChanged.emit(this.daysRemaining);
      this.hoursChanged.emit(this.hoursRemaining);
      this.minutesChanged.emit(this.minutesRemaining);
      this.secondsChanged.emit(this.secondsRemaining);
      this.isFinishDate = this.finishDate.isSameOrBefore(today);
    }, 1000);
  }
}
