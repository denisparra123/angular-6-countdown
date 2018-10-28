(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('countdown', ['exports', '@angular/core', 'moment', '@angular/common'], factory) :
    (factory((global.countdown = {}),global.ng.core,global.moment_,global.ng.common));
}(this, (function (exports,core,moment_,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumberTransformPipe = /** @class */ (function () {
        function NumberTransformPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NumberTransformPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    if (value < 10) {
                        return "0" + value;
                    }
                    return "" + value;
                }
                else {
                    return '00';
                }
            };
        NumberTransformPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'appNumberTransform'
                    },] }
        ];
        return NumberTransformPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            this.daysChanged = new core.EventEmitter();
            this.hoursChanged = new core.EventEmitter();
            this.minutesChanged = new core.EventEmitter();
            this.secondsChanged = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'lib-countdown',
                        template: "<div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"hide-on-small-only\">\r\n    <div class=\"row container\">\r\n      <div class=\"col s12 center-align\">\r\n        <h2 class=\"text-bold\"> {{title}} </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row container\">\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{daysRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{daysText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{hoursRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{hoursText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{minutesRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{minutesText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-image waves-effect waves-block waves-light\">\r\n            <p class=\"number-style center-align\"> {{secondsRemaining | appNumberTransform}} </p>\r\n          </div>\r\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\r\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{secondsText}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"row container show-on-small hide-on-med-and-up\">\r\n    <div class=\"row container\">\r\n      <div class=\"col s12 center-align\">\r\n        <h5 class=\"text-bold count-title-mobile\"> {{title}} </h5>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-image waves-effect waves-block waves-light\">\r\n          <p class=\"number-style-mobile center-align\"> \r\n            <span class=\"text-bold\">{{daysText}}: </span> {{daysRemaining | appNumberTransform}} | \r\n            <span class=\"text-bold\"> {{hoursText}}: </span> {{hoursRemaining | appNumberTransform}} |\r\n            <span class=\"text-bold\"> {{minutesText}}:</span> {{minutesRemaining | appNumberTransform}} |\r\n            <span class=\"text-bold\"> {{secondsText}}:</span> {{secondsRemaining | appNumberTransform}} </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"isCustomTemplate\"></ng-content>",
                        styles: [".number-style{font-size:60px;font-weight:700}.number-style-mobile{font-size:20px}@media screen and (max-width:415px){.number-style-mobile{font-size:13px!important}}@media screen and (max-width:380px){.number-style-mobile{font-size:12px!important}}@media screen and (max-width:330px){.number-style-mobile{font-size:10px!important}}.text-bold{font-weight:700}@media screen and (max-width:415px){.card-title{font-size:20px!important}}@media screen and (max-width:380px){.card-title{font-size:15px!important}}@media screen and (max-width:330px){.card-title{font-size:10px!important}}@media screen and (max-width:360px){.count-title-mobile{font-size:20px!important}}@media screen and (max-width:320px){.count-title-mobile{font-size:18px!important}}"]
                    }] }
        ];
        CountDownComponent.propDecorators = {
            date: [{ type: core.Input }],
            title: [{ type: core.Input }],
            daysText: [{ type: core.Input }],
            hoursText: [{ type: core.Input }],
            minutesText: [{ type: core.Input }],
            secondsText: [{ type: core.Input }],
            isCustomTemplate: [{ type: core.Input }],
            cardBackgroundColor: [{ type: core.Input }],
            cardTextColor: [{ type: core.Input }],
            daysChanged: [{ type: core.Output }],
            hoursChanged: [{ type: core.Output }],
            minutesChanged: [{ type: core.Output }],
            secondsChanged: [{ type: core.Output }]
        };
        return CountDownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CountDownModule = /** @class */ (function () {
        function CountDownModule() {
        }
        CountDownModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            CountDownComponent,
                            NumberTransformPipe,
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            CountDownComponent
                        ]
                    },] }
        ];
        return CountDownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CountDownModule = CountDownModule;
    exports.ɵa = CountDownComponent;
    exports.ɵb = NumberTransformPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY291bnRkb3duL2xpYi9waXBlcy9udW1iZXItdHJhbnNmb3JtL251bWJlci10cmFuc2Zvcm0ucGlwZS50cyIsIm5nOi8vY291bnRkb3duL2xpYi9jb3VudGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9jb3VudGRvd24vbGliL2NvdW50ZG93Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcE51bWJlclRyYW5zZm9ybSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlclRyYW5zZm9ybVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlIDwgMTApIHtcclxuICAgICAgICByZXR1cm4gYDAke3ZhbHVlfWA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJzAwJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItY291bnRkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRkb3duLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jb3VudGRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRlO1xyXG4gIEBJbnB1dCgpIHRpdGxlID0gJ1RoZSB0aW1lIHJlbWFpbmluZyBpczonO1xyXG4gIEBJbnB1dCgpIGRheXNUZXh0ID0gJ0RheXMnO1xyXG4gIEBJbnB1dCgpIGhvdXJzVGV4dCA9ICdIb3Vycyc7XHJcbiAgQElucHV0KCkgbWludXRlc1RleHQgPSAnTWludXRlcyc7XHJcbiAgQElucHV0KCkgc2Vjb25kc1RleHQgPSAnU2Vjb25kcyc7XHJcbiAgQElucHV0KCkgaXNDdXN0b21UZW1wbGF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnc2VhZ3JlZW4nO1xyXG4gIEBJbnB1dCgpIGNhcmRUZXh0Q29sb3IgPSAnd2hpdGUnO1xyXG4gIEBPdXRwdXQoKSBkYXlzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaG91cnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBtaW51dGVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgc2Vjb25kc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgZmluaXNoRGF0ZTtcclxuICBkYXlzUmVtYWluaW5nOiBudW1iZXI7XHJcbiAgaG91cnNSZW1haW5pbmc6IG51bWJlcjtcclxuICBtaW51dGVzUmVtYWluaW5nOiBudW1iZXI7XHJcbiAgc2Vjb25kc1JlbWFpbmluZzogbnVtYmVyO1xyXG4gIGlzRmluaXNoRGF0ZTogYm9vbGVhbjtcclxuICBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmluaXNoRGF0ZSA9IHRoaXMubW9tZW50KHRoaXMuZGF0ZSk7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5tb21lbnQoKTtcclxuICAgICAgdGhpcy5kYXlzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdkYXlzJykgJSAzNjU7XHJcbiAgICAgIHRoaXMuaG91cnNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ2hvdXJzJykgJSAyNDtcclxuICAgICAgdGhpcy5taW51dGVzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdtaW51dGVzJykgJSA2MDtcclxuICAgICAgdGhpcy5zZWNvbmRzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdzZWNvbmRzJykgJSA2MDtcclxuICAgICAgdGhpcy5kYXlzQ2hhbmdlZC5lbWl0KHRoaXMuZGF5c1JlbWFpbmluZyk7XHJcbiAgICAgIHRoaXMuaG91cnNDaGFuZ2VkLmVtaXQodGhpcy5ob3Vyc1JlbWFpbmluZyk7XHJcbiAgICAgIHRoaXMubWludXRlc0NoYW5nZWQuZW1pdCh0aGlzLm1pbnV0ZXNSZW1haW5pbmcpO1xyXG4gICAgICB0aGlzLnNlY29uZHNDaGFuZ2VkLmVtaXQodGhpcy5zZWNvbmRzUmVtYWluaW5nKTtcclxuICAgICAgdGhpcy5pc0ZpbmlzaERhdGUgPSB0aGlzLmZpbmlzaERhdGUuaXNTYW1lT3JCZWZvcmUodG9kYXkpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOdW1iZXJUcmFuc2Zvcm1QaXBlIH0gZnJvbSAnLi9waXBlcy9udW1iZXItdHJhbnNmb3JtL251bWJlci10cmFuc2Zvcm0ucGlwZSc7XHJcbmltcG9ydCB7IENvdW50RG93bkNvbXBvbmVudCB9IGZyb20gJy4vY291bnRkb3duLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ291bnREb3duQ29tcG9uZW50LFxyXG4gICAgTnVtYmVyVHJhbnNmb3JtUGlwZSxcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ291bnREb3duQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnREb3duTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsiUGlwZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztRQU1FLHVDQUFTOzs7O1lBQVQsVUFBVSxLQUFhO2dCQUNyQixJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7d0JBQ2QsT0FBTyxNQUFJLEtBQU8sQ0FBQztxQkFDcEI7b0JBQ0QsT0FBTyxLQUFHLEtBQU8sQ0FBQztpQkFDbkI7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjs7b0JBYkZBLFNBQUksU0FBQzt3QkFDSixJQUFJLEVBQUUsb0JBQW9CO3FCQUMzQjs7a0NBSkQ7Ozs7Ozs7QUNBQTs7eUJBV21CLHdCQUF3Qjs0QkFDckIsTUFBTTs2QkFDTCxPQUFPOytCQUNMLFNBQVM7K0JBQ1QsU0FBUztvQ0FDSixLQUFLO3VDQUNGLFVBQVU7aUNBQ2hCLE9BQU87K0JBQ2MsSUFBSUMsaUJBQVksRUFBVTtnQ0FDekIsSUFBSUEsaUJBQVksRUFBVTtrQ0FDeEIsSUFBSUEsaUJBQVksRUFBVTtrQ0FDMUIsSUFBSUEsaUJBQVksRUFBVTswQkFPbEUsT0FBTzs7Ozs7UUFFaEIscUNBQVE7OztZQUFSO2dCQUFBLGlCQWNDO2dCQWJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pDLFdBQVcsQ0FBQzs7b0JBQ1YsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM1QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7b0JBQy9ELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDaEUsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3BFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNwRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMzRCxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1Y7O29CQXpDRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxlQUFlO3dCQUN6Qiw0NkdBQXlDOztxQkFFMUM7OzsyQkFFRUMsVUFBSzs0QkFDTEEsVUFBSzsrQkFDTEEsVUFBSztnQ0FDTEEsVUFBSztrQ0FDTEEsVUFBSztrQ0FDTEEsVUFBSzt1Q0FDTEEsVUFBSzswQ0FDTEEsVUFBSztvQ0FDTEEsVUFBSztrQ0FDTEMsV0FBTTttQ0FDTkEsV0FBTTtxQ0FDTkEsV0FBTTtxQ0FDTkEsV0FBTTs7aUNBdEJUOzs7Ozs7O0FDQUE7Ozs7b0JBTUNDLGFBQVEsU0FBQzt3QkFDUixZQUFZLEVBQUU7NEJBQ1osa0JBQWtCOzRCQUNsQixtQkFBbUI7eUJBQ3BCO3dCQUNELE9BQU8sRUFBRTs0QkFDUEMsbUJBQVk7eUJBQ2I7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQLGtCQUFrQjt5QkFDbkI7cUJBQ0Y7OzhCQWpCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==