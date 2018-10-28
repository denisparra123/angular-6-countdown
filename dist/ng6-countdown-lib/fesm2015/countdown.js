import { Pipe, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import * as moment_ from 'moment';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class NumberTransformPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value) {
            if (value < 10) {
                return `0${value}`;
            }
            return `${value}`;
        }
        else {
            return '00';
        }
    }
}
NumberTransformPipe.decorators = [
    { type: Pipe, args: [{
                name: 'appNumberTransform'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CountDownComponent {
    constructor() {
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
    ngOnInit() {
        this.finishDate = this.moment(this.date);
        setInterval(() => {
            /** @type {?} */
            const today = this.moment();
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CountDownModule {
}
CountDownModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CountDownModule, CountDownComponent as ɵa, NumberTransformPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb3VudGRvd24vbGliL3BpcGVzL251bWJlci10cmFuc2Zvcm0vbnVtYmVyLXRyYW5zZm9ybS5waXBlLnRzIiwibmc6Ly9jb3VudGRvd24vbGliL2NvdW50ZG93bi5jb21wb25lbnQudHMiLCJuZzovL2NvdW50ZG93bi9saWIvY291bnRkb3cubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYXBwTnVtYmVyVHJhbnNmb3JtJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyVHJhbnNmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPCAxMCkge1xyXG4gICAgICAgIHJldHVybiBgMCR7dmFsdWV9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYCR7dmFsdWV9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnMDAnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1jb3VudGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhdGU7XHJcbiAgQElucHV0KCkgdGl0bGUgPSAnVGhlIHRpbWUgcmVtYWluaW5nIGlzOic7XHJcbiAgQElucHV0KCkgZGF5c1RleHQgPSAnRGF5cyc7XHJcbiAgQElucHV0KCkgaG91cnNUZXh0ID0gJ0hvdXJzJztcclxuICBASW5wdXQoKSBtaW51dGVzVGV4dCA9ICdNaW51dGVzJztcclxuICBASW5wdXQoKSBzZWNvbmRzVGV4dCA9ICdTZWNvbmRzJztcclxuICBASW5wdXQoKSBpc0N1c3RvbVRlbXBsYXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY2FyZEJhY2tncm91bmRDb2xvciA9ICdzZWFncmVlbic7XHJcbiAgQElucHV0KCkgY2FyZFRleHRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgQE91dHB1dCgpIGRheXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBob3Vyc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIG1pbnV0ZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBzZWNvbmRzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBmaW5pc2hEYXRlO1xyXG4gIGRheXNSZW1haW5pbmc6IG51bWJlcjtcclxuICBob3Vyc1JlbWFpbmluZzogbnVtYmVyO1xyXG4gIG1pbnV0ZXNSZW1haW5pbmc6IG51bWJlcjtcclxuICBzZWNvbmRzUmVtYWluaW5nOiBudW1iZXI7XHJcbiAgaXNGaW5pc2hEYXRlOiBib29sZWFuO1xyXG4gIG1vbWVudCA9IG1vbWVudF87XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5maW5pc2hEYXRlID0gdGhpcy5tb21lbnQodGhpcy5kYXRlKTtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgdG9kYXkgPSB0aGlzLm1vbWVudCgpO1xyXG4gICAgICB0aGlzLmRheXNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ2RheXMnKSAlIDM2NTtcclxuICAgICAgdGhpcy5ob3Vyc1JlbWFpbmluZyA9IHRoaXMuZmluaXNoRGF0ZS5kaWZmKHRvZGF5LCAnaG91cnMnKSAlIDI0O1xyXG4gICAgICB0aGlzLm1pbnV0ZXNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ21pbnV0ZXMnKSAlIDYwO1xyXG4gICAgICB0aGlzLnNlY29uZHNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ3NlY29uZHMnKSAlIDYwO1xyXG4gICAgICB0aGlzLmRheXNDaGFuZ2VkLmVtaXQodGhpcy5kYXlzUmVtYWluaW5nKTtcclxuICAgICAgdGhpcy5ob3Vyc0NoYW5nZWQuZW1pdCh0aGlzLmhvdXJzUmVtYWluaW5nKTtcclxuICAgICAgdGhpcy5taW51dGVzQ2hhbmdlZC5lbWl0KHRoaXMubWludXRlc1JlbWFpbmluZyk7XHJcbiAgICAgIHRoaXMuc2Vjb25kc0NoYW5nZWQuZW1pdCh0aGlzLnNlY29uZHNSZW1haW5pbmcpO1xyXG4gICAgICB0aGlzLmlzRmluaXNoRGF0ZSA9IHRoaXMuZmluaXNoRGF0ZS5pc1NhbWVPckJlZm9yZSh0b2RheSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE51bWJlclRyYW5zZm9ybVBpcGUgfSBmcm9tICcuL3BpcGVzL251bWJlci10cmFuc2Zvcm0vbnVtYmVyLXRyYW5zZm9ybS5waXBlJztcclxuaW1wb3J0IHsgQ291bnREb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGRvd24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBDb3VudERvd25Db21wb25lbnQsXHJcbiAgICBOdW1iZXJUcmFuc2Zvcm1QaXBlLFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBDb3VudERvd25Db21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztJQU1FLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLG9CQUFvQjthQUMzQjs7Ozs7OztBQ0pEOztxQkFXbUIsd0JBQXdCO3dCQUNyQixNQUFNO3lCQUNMLE9BQU87MkJBQ0wsU0FBUzsyQkFDVCxTQUFTO2dDQUNKLEtBQUs7bUNBQ0YsVUFBVTs2QkFDaEIsT0FBTzsyQkFDYyxJQUFJLFlBQVksRUFBVTs0QkFDekIsSUFBSSxZQUFZLEVBQVU7OEJBQ3hCLElBQUksWUFBWSxFQUFVOzhCQUMxQixJQUFJLFlBQVksRUFBVTtzQkFPbEUsT0FBTzs7Ozs7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDOztZQUNWLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRCxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Y7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDQ2R0FBeUM7O2FBRTFDOzs7bUJBRUUsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsTUFBTTsyQkFDTixNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTs7Ozs7OztBQ3RCVDs7O1lBTUMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtpQkFDbkI7YUFDRjs7Ozs7Ozs7Ozs7Ozs7OyJ9