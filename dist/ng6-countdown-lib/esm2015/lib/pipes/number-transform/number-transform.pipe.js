/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NumberTransformPipe {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRyYW5zZm9ybS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY291bnRkb3duLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL251bWJlci10cmFuc2Zvcm0vbnVtYmVyLXRyYW5zZm9ybS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNOzs7OztJQUNKLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLG9CQUFvQjthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnYXBwTnVtYmVyVHJhbnNmb3JtJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyVHJhbnNmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUgPCAxMCkge1xyXG4gICAgICAgIHJldHVybiBgMCR7dmFsdWV9YDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYCR7dmFsdWV9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnMDAnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=