/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
var CountDownComponent = /** @class */ (function () {
    function CountDownComponent() {
        this.title = 'The time remaining is:';
        this.daysText = 'Days';
        this.hoursText = 'Hours';
        this.minutesText = 'Minutes';
        this.secondsText = 'Seconds';
        this.isCustomTemplate = false;
        this.cardBackgroundColor = 'seagreen';
        this.cardTextColor = 'white';
        this.daysChanged = new EventEmitter();
        this.hoursChanged = new EventEmitter();
        this.minutesChanged = new EventEmitter();
        this.secondsChanged = new EventEmitter();
        this.moment = moment_;
    }
    /**
     * @return {?}
     */
    CountDownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.finishDate = this.moment(this.date);
        setInterval(function () {
            /** @type {?} */
            var today = _this.moment();
            _this.daysRemaining = _this.finishDate.diff(today, 'days') % 365;
            _this.hoursRemaining = _this.finishDate.diff(today, 'hours') % 24;
            _this.minutesRemaining = _this.finishDate.diff(today, 'minutes') % 60;
            _this.secondsRemaining = _this.finishDate.diff(today, 'seconds') % 60;
            _this.daysChanged.emit(_this.daysRemaining);
            _this.hoursChanged.emit(_this.hoursRemaining);
            _this.minutesChanged.emit(_this.minutesRemaining);
            _this.secondsChanged.emit(_this.secondsRemaining);
            _this.isFinishDate = _this.finishDate.isSameOrBefore(today);
        }, 1000);
    };
    CountDownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-countdown',
                    template: "<div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"hide-on-small-only\">\r\n    <div class=\"row container\">\r\n      <div class=\"col s12 center-align\">\r\n        <h2 class=\"text-bold\"> {{title}} </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row container\">\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{daysRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{daysText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{hoursRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{hoursText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{minutesRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{minutesText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{secondsRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{secondsText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"row container show-on-small hide-on-med-and-up\">\r\n    <div class=\"row container\">\r\n      <div class=\"col s12 center-align\">\r\n        <h5 class=\"text-bold count-title-mobile\"> {{title}} </h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-image waves-effect waves-block waves-light\">\r\n          <p class=\"number-style-mobile center-align\"> \r\n            <span class=\"text-bold\">{{daysText}}: </span> {{daysRemaining | appNumberTransform}} | \r\n            <span class=\"text-bold\"> {{hoursText}}: </span> {{hoursRemaining | appNumberTransform}} |\r\n            <span class=\"text-bold\"> {{minutesText}}:</span> {{minutesRemaining | appNumberTransform}} |\r\n            <span class=\"text-bold\"> {{secondsText}}:</span> {{secondsRemaining | appNumberTransform}} </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"isCustomTemplate\"></ng-content>",
                    styles: [".number-style{font-size:60px;font-weight:700}.number-style-mobile{font-size:20px}@media screen and (max-width:415px){.number-style-mobile{font-size:13px!important}}@media screen and (max-width:380px){.number-style-mobile{font-size:12px!important}}@media screen and (max-width:330px){.number-style-mobile{font-size:10px!important}}.text-bold{font-weight:700}@media screen and (max-width:415px){.card-title{font-size:20px!important}}@media screen and (max-width:380px){.card-title{font-size:15px!important}}@media screen and (max-width:330px){.card-title{font-size:10px!important}}@media screen and (max-width:360px){.count-title-mobile{font-size:20px!important}}@media screen and (max-width:320px){.count-title-mobile{font-size:18px!important}}"]
                }] }
    ];
    CountDownComponent.propDecorators = {
        date: [{ type: Input }],
        title: [{ type: Input }],
        daysText: [{ type: Input }],
        hoursText: [{ type: Input }],
        minutesText: [{ type: Input }],
        secondsText: [{ type: Input }],
        isCustomTemplate: [{ type: Input }],
        cardBackgroundColor: [{ type: Input }],
        cardTextColor: [{ type: Input }],
        daysChanged: [{ type: Output }],
        hoursChanged: [{ type: Output }],
        minutesChanged: [{ type: Output }],
        secondsChanged: [{ type: Output }]
    };
    return CountDownComponent;
}());
export { CountDownComponent };
if (false) {
    /** @type {?} */
    CountDownComponent.prototype.date;
    /** @type {?} */
    CountDownComponent.prototype.title;
    /** @type {?} */
    CountDownComponent.prototype.daysText;
    /** @type {?} */
    CountDownComponent.prototype.hoursText;
    /** @type {?} */
    CountDownComponent.prototype.minutesText;
    /** @type {?} */
    CountDownComponent.prototype.secondsText;
    /** @type {?} */
    CountDownComponent.prototype.isCustomTemplate;
    /** @type {?} */
    CountDownComponent.prototype.cardBackgroundColor;
    /** @type {?} */
    CountDownComponent.prototype.cardTextColor;
    /** @type {?} */
    CountDownComponent.prototype.daysChanged;
    /** @type {?} */
    CountDownComponent.prototype.hoursChanged;
    /** @type {?} */
    CountDownComponent.prototype.minutesChanged;
    /** @type {?} */
    CountDownComponent.prototype.secondsChanged;
    /** @type {?} */
    CountDownComponent.prototype.finishDate;
    /** @type {?} */
    CountDownComponent.prototype.daysRemaining;
    /** @type {?} */
    CountDownComponent.prototype.hoursRemaining;
    /** @type {?} */
    CountDownComponent.prototype.minutesRemaining;
    /** @type {?} */
    CountDownComponent.prototype.secondsRemaining;
    /** @type {?} */
    CountDownComponent.prototype.isFinishDate;
    /** @type {?} */
    CountDownComponent.prototype.moment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvdW50ZG93bi8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDOzs7cUJBU2Ysd0JBQXdCO3dCQUNyQixNQUFNO3lCQUNMLE9BQU87MkJBQ0wsU0FBUzsyQkFDVCxTQUFTO2dDQUNKLEtBQUs7bUNBQ0YsVUFBVTs2QkFDaEIsT0FBTzsyQkFDYyxJQUFJLFlBQVksRUFBVTs0QkFDekIsSUFBSSxZQUFZLEVBQVU7OEJBQ3hCLElBQUksWUFBWSxFQUFVOzhCQUMxQixJQUFJLFlBQVksRUFBVTtzQkFPbEUsT0FBTzs7Ozs7SUFFaEIscUNBQVE7OztJQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQzs7WUFDVixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQy9ELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoRSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwRSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0QsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNWOztnQkF6Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0NkdBQXlDOztpQkFFMUM7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzttQ0FDTCxLQUFLO3NDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxNQUFNOytCQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNOzs2QkF0QlQ7O1NBU2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY291bnRkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb3VudGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRlO1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJ1RoZSB0aW1lIHJlbWFpbmluZyBpczonO1xyXG4gIEBJbnB1dCgpIGRheXNUZXh0ID0gJ0RheXMnO1xyXG4gIEBJbnB1dCgpIGhvdXJzVGV4dCA9ICdIb3Vycyc7XHJcbiAgQElucHV0KCkgbWludXRlc1RleHQgPSAnTWludXRlcyc7XHJcbiAgQElucHV0KCkgc2Vjb25kc1RleHQgPSAnU2Vjb25kcyc7XHJcbiAgQElucHV0KCkgaXNDdXN0b21UZW1wbGF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnc2VhZ3JlZW4nO1xyXG4gIEBJbnB1dCgpIGNhcmRUZXh0Q29sb3IgPSAnd2hpdGUnO1xyXG4gIEBPdXRwdXQoKSBkYXlzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaG91cnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBtaW51dGVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgc2Vjb25kc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgZmluaXNoRGF0ZTtcclxuICBkYXlzUmVtYWluaW5nOiBudW1iZXI7XHJcbiAgaG91cnNSZW1haW5pbmc6IG51bWJlcjtcclxuICBtaW51dGVzUmVtYWluaW5nOiBudW1iZXI7XHJcbiAgc2Vjb25kc1JlbWFpbmluZzogbnVtYmVyO1xyXG4gIGlzRmluaXNoRGF0ZTogYm9vbGVhbjtcclxuICBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmluaXNoRGF0ZSA9IHRoaXMubW9tZW50KHRoaXMuZGF0ZSk7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5tb21lbnQoKTtcclxuICAgICAgdGhpcy5kYXlzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdkYXlzJykgJSAzNjU7XHJcbiAgICAgIHRoaXMuaG91cnNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ2hvdXJzJykgJSAyNDtcclxuICAgICAgdGhpcy5taW51dGVzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdtaW51dGVzJykgJSA2MDtcclxuICAgICAgdGhpcy5zZWNvbmRzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdzZWNvbmRzJykgJSA2MDtcclxuICAgICAgdGhpcy5kYXlzQ2hhbmdlZC5lbWl0KHRoaXMuZGF5c1JlbWFpbmluZyk7XHJcbiAgICAgIHRoaXMuaG91cnNDaGFuZ2VkLmVtaXQodGhpcy5ob3Vyc1JlbWFpbmluZyk7XHJcbiAgICAgIHRoaXMubWludXRlc0NoYW5nZWQuZW1pdCh0aGlzLm1pbnV0ZXNSZW1haW5pbmcpO1xyXG4gICAgICB0aGlzLnNlY29uZHNDaGFuZ2VkLmVtaXQodGhpcy5zZWNvbmRzUmVtYWluaW5nKTtcclxuICAgICAgdGhpcy5pc0ZpbmlzaERhdGUgPSB0aGlzLmZpbmlzaERhdGUuaXNTYW1lT3JCZWZvcmUodG9kYXkpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==