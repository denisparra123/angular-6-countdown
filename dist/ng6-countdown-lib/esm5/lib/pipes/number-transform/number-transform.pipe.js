/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
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
        { type: Pipe, args: [{
                    name: 'appNumberTransform'
                },] }
    ];
    return NumberTransformPipe;
}());
export { NumberTransformPipe };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRyYW5zZm9ybS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY291bnRkb3duLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL251bWJlci10cmFuc2Zvcm0vbnVtYmVyLXRyYW5zZm9ybS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFNbEQsdUNBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFDckIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7Z0JBQ2QsT0FBTyxNQUFJLEtBQU8sQ0FBQzthQUNwQjtZQUNELE9BQU8sS0FBRyxLQUFPLENBQUM7U0FDbkI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjs7Z0JBYkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxvQkFBb0I7aUJBQzNCOzs4QkFKRDs7U0FLYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2FwcE51bWJlclRyYW5zZm9ybSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlclRyYW5zZm9ybVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlIDwgMTApIHtcclxuICAgICAgICByZXR1cm4gYDAke3ZhbHVlfWA7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJzAwJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19