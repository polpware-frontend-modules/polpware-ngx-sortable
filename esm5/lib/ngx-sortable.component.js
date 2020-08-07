import { __read, __spread } from "tslib";
import { Component, Input, Output, ContentChild, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NgxSortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.moveUp(); });
    i0.ɵɵtext(5, "\u21E7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.moveDown(); });
    i0.ɵɵtext(7, "\u21E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.headerClasses);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r0.selectedItem);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r0.selectedItem);
} }
function NgxSortableComponent_li_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 12);
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r7.dropzoneClasses);
} }
function NgxSortableComponent_li_3_ng_template_2_Template(rf, ctx) { }
var _c0 = function (a0) { return { "active": a0 }; };
var _c1 = function (a0) { return [a0]; };
function NgxSortableComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function NgxSortableComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r10); var item_r5 = ctx.$implicit; var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.selectItem(item_r5); })("drop", function NgxSortableComponent_li_3_Template_li_drop_0_listener($event) { i0.ɵɵrestoreView(_r10); var i_r6 = ctx.index; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onDrop($event, i_r6); })("dragover", function NgxSortableComponent_li_3_Template_li_dragover_0_listener($event) { i0.ɵɵrestoreView(_r10); var i_r6 = ctx.index; var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.allowDrop($event, i_r6); })("dragstart", function NgxSortableComponent_li_3_Template_li_dragstart_0_listener($event) { i0.ɵɵrestoreView(_r10); var i_r6 = ctx.index; var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onDragStart($event, i_r6); });
    i0.ɵɵtemplate(1, NgxSortableComponent_li_3_div_1_Template, 1, 1, "div", 10);
    i0.ɵɵtemplate(2, NgxSortableComponent_li_3_ng_template_2_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r5 = ctx.$implicit;
    var i_r6 = ctx.index;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, item_r5 == ctx_r1.selectedItem));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.onDragOverIndex == i_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction1(6, _c1, item_r5))("ngForTemplate", ctx_r1.itemTemplate);
} }
var NgxSortableComponent = /** @class */ (function () {
    function NgxSortableComponent() {
        this.showHeader = true;
        this.reRender = false;
        this.containerClasses = '';
        this.headerClasses = '';
        this.listClasses = '';
        this.dropzoneClasses = '';
        this.listSorted = new EventEmitter();
        this.draggedIndex = -1;
        this.onDragOverIndex = -1;
    }
    NgxSortableComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
    };
    NgxSortableComponent.prototype.moveUp = function () {
        var index = this.items.indexOf(this.selectedItem);
        if (index === 0) {
            return;
        }
        this.swapElements(index, index - 1);
        this.listSorted.emit(this.items);
    };
    NgxSortableComponent.prototype.moveDown = function () {
        var index = this.items.indexOf(this.selectedItem);
        if (index === this.items.length - 1) {
            return;
        }
        this.swapElements(index, index + 1);
        this.listSorted.emit(this.items);
    };
    NgxSortableComponent.prototype.onDrop = function ($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
        // index is of the element on which the item is dropped
        this.handleDrop(index);
    };
    NgxSortableComponent.prototype.allowDrop = function ($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
        // index is of the item on which the item is currently hovered
        this.onDragOverIndex = index;
    };
    NgxSortableComponent.prototype.onDragStart = function ($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
        this.draggedIndex = index;
    };
    NgxSortableComponent.prototype.handleDrop = function (droppedIndex) {
        var _this = this;
        var item = this.items[this.draggedIndex];
        // Split the items at the dropped index.
        var pred = this.items.filter(function (_, i) { return i < droppedIndex && i !== _this.draggedIndex; });
        var succ = this.items.filter(function (_, i) { return i >= droppedIndex && i !== _this.draggedIndex; });
        // Cmobine them
        var newItems = __spread(pred, [item], succ);
        if (this.reRender) {
            this.items = newItems.map(function (a) {
                return Object.assign({}, a);
            });
        }
        else {
            this.items = newItems;
        }
        this.draggedIndex = -1;
        this.onDragOverIndex = -1;
        this.listSorted.emit(this.items);
    };
    NgxSortableComponent.prototype.swapElements = function (oldIndex, newIndex) {
        var newItems = __spread(this.items);
        var temp = newItems[oldIndex];
        newItems[oldIndex] = newItems[newIndex];
        newItems[newIndex] = temp;
        if (this.reRender) {
            this.items = newItems.map(function (a) {
                return Object.assign({}, a);
            });
        }
        else {
            this.items = newItems;
        }
    };
    NgxSortableComponent.ɵfac = function NgxSortableComponent_Factory(t) { return new (t || NgxSortableComponent)(); };
    NgxSortableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxSortableComponent, selectors: [["polp-ngx-sortable"]], contentQueries: function NgxSortableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        } }, inputs: { items: "items", name: "name", showHeader: "showHeader", reRender: "reRender", containerClasses: "containerClasses", headerClasses: "headerClasses", listClasses: "listClasses", dropzoneClasses: "dropzoneClasses" }, outputs: { listSorted: "listSorted" }, decls: 4, vars: 4, consts: [[1, "sortable-container", 3, "ngClass"], ["class", "sortable-header", 3, "ngClass", 4, "ngIf"], [1, "sortable-list", 3, "ngClass"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart", 4, "ngFor", "ngForOf"], [1, "sortable-header", 3, "ngClass"], [1, "sortable-name"], [1, "sortable-buttons"], ["title", "Move Up", 3, "disabled", "click"], ["title", "Move Down", 3, "disabled", "click"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart"], ["class", "drop-zone", 3, "ngClass", 4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "drop-zone", 3, "ngClass"]], template: function NgxSortableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, NgxSortableComponent_div_1_Template, 8, 4, "div", 1);
            i0.ɵɵelementStart(2, "ul", 2);
            i0.ɵɵtemplate(3, NgxSortableComponent_li_3_Template, 3, 8, "li", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.containerClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.listClasses);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [i1.NgClass, i1.NgIf, i1.NgForOf], encapsulation: 2 });
    return NgxSortableComponent;
}());
export { NgxSortableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxSortableComponent, [{
        type: Component,
        args: [{
                selector: 'polp-ngx-sortable',
                templateUrl: './ngx-sortable.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, { items: [{
            type: Input
        }], name: [{
            type: Input
        }], showHeader: [{
            type: Input
        }], reRender: [{
            type: Input
        }], containerClasses: [{
            type: Input
        }], headerClasses: [{
            type: Input
        }], listClasses: [{
            type: Input
        }], dropzoneClasses: [{
            type: Input
        }], listSorted: [{
            type: Output
        }], itemTemplate: [{
            type: ContentChild,
            args: [TemplateRef]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvcnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtc29ydGFibGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXNvcnRhYmxlLmNvbXBvbmVudC50cyIsImxpYi9uZ3gtc29ydGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUNwRCxXQUFXLEVBQ2QsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRm5CLDhCQUNJO0lBQUEsZ0NBQTZCO0lBQUEsWUFBUTtJQUFBLGlCQUFRO0lBQzdDLDhCQUNJO0lBQUEsaUNBQXNFO0lBQTlELGtMQUFrQjtJQUE0QyxzQkFBTztJQUFBLGlCQUFTO0lBQ3RGLGlDQUEwRTtJQUFsRSxvTEFBb0I7SUFBOEMsc0JBQU87SUFBQSxpQkFBUztJQUM5RixpQkFBTTtJQUNWLGlCQUFNOzs7SUFOdUIsOENBQXlCO0lBQ3JCLGVBQVE7SUFBUixpQ0FBUTtJQUVOLGVBQTBCO0lBQTFCLCtDQUEwQjtJQUN4QixlQUEwQjtJQUExQiwrQ0FBMEI7OztJQU92RCwwQkFDTTs7O0lBRGlCLGdEQUEyQjs7Ozs7OztJQUh0RCw2QkFHSTtJQUhpQixzTkFBMEIseU1BQUEsb05BQUEsd05BQUE7SUFHM0MsMkVBQ0E7SUFDQSwyRkFDQTtJQUNKLGlCQUFLOzs7OztJQU5ELG9GQUE0QztJQUVPLGVBQTRCO0lBQTVCLHFEQUE0QjtJQUU1RCxlQUFrQjtJQUFsQiw2REFBa0Isc0NBQUE7O0FEVGpEO0lBcUJJO1FBYmdCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsb0JBQWUsR0FBVyxF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QjtZQUF2Qix5Q0FBdUI7WUFDRyxlQUEwQztZQUExQyxtQ0FBMEM7OytCRFRsRztDQTBHQyxBQXJHRCxJQXFHQztTQWhHWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLEVBQUU7YUFDaEI7O2tCQUVJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLFlBQVk7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlcixcbiAgICBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLW5neC1zb3J0YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1zb3J0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTb3J0YWJsZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93SGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVSZW5kZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29udGFpbmVyQ2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNsYXNzZXM6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsaXN0Q2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGRyb3B6b25lQ2xhc3Nlczogc3RyaW5nID0gJyc7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGxpc3RTb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueTtcbiAgICBwdWJsaWMgZHJhZ2dlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMgb25EcmFnT3ZlckluZGV4OiBudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVVcCgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN3YXBFbGVtZW50cyhpbmRleCwgaW5kZXggLSAxKTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVEb3duKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zd2FwRWxlbWVudHMoaW5kZXgsIGluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMubGlzdFNvcnRlZC5lbWl0KHRoaXMuaXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyb3AoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBpbmRleCBpcyBvZiB0aGUgZWxlbWVudCBvbiB3aGljaCB0aGUgaXRlbSBpcyBkcm9wcGVkXG4gICAgICAgIHRoaXMuaGFuZGxlRHJvcChpbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbG93RHJvcCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBpbmRleCBpcyBvZiB0aGUgaXRlbSBvbiB3aGljaCB0aGUgaXRlbSBpcyBjdXJyZW50bHkgaG92ZXJlZFxuICAgICAgICB0aGlzLm9uRHJhZ092ZXJJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYWdTdGFydCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmRyYWdnZWRJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVEcm9wKGRyb3BwZWRJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW3RoaXMuZHJhZ2dlZEluZGV4XTtcbiAgICAgICAgLy8gU3BsaXQgdGhlIGl0ZW1zIGF0IHRoZSBkcm9wcGVkIGluZGV4LlxuICAgICAgICBjb25zdCBwcmVkID0gdGhpcy5pdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgPCBkcm9wcGVkSW5kZXggJiYgaSAhPT0gdGhpcy5kcmFnZ2VkSW5kZXgpO1xuICAgICAgICBjb25zdCBzdWNjID0gdGhpcy5pdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgPj0gZHJvcHBlZEluZGV4ICYmIGkgIT09IHRoaXMuZHJhZ2dlZEluZGV4KTtcbiAgICAgICAgLy8gQ21vYmluZSB0aGVtXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLnByZWQsIGl0ZW0sIC4uLnN1Y2NdO1xuICAgICAgICBpZiAodGhpcy5yZVJlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhZ2dlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMub25EcmFnT3ZlckluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMubGlzdFNvcnRlZC5lbWl0KHRoaXMuaXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzd2FwRWxlbWVudHMob2xkSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi50aGlzLml0ZW1zXTtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ld0l0ZW1zW29sZEluZGV4XTtcbiAgICAgICAgbmV3SXRlbXNbb2xkSW5kZXhdID0gbmV3SXRlbXNbbmV3SW5kZXhdO1xuICAgICAgICBuZXdJdGVtc1tuZXdJbmRleF0gPSB0ZW1wO1xuXG4gICAgICAgIGlmICh0aGlzLnJlUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNvcnRhYmxlLWNvbnRhaW5lclwiIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzZXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwic29ydGFibGUtaGVhZGVyXCIgW25nQ2xhc3NdPVwiaGVhZGVyQ2xhc3Nlc1wiICpuZ0lmPVwic2hvd0hlYWRlclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJzb3J0YWJsZS1uYW1lXCI+e3tuYW1lfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic29ydGFibGUtYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibW92ZVVwKClcIiBbZGlzYWJsZWRdPVwiIXNlbGVjdGVkSXRlbVwiIHRpdGxlPVwiTW92ZSBVcFwiPiYjODY3OTs8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm1vdmVEb3duKClcIiBbZGlzYWJsZWRdPVwiIXNlbGVjdGVkSXRlbVwiIHRpdGxlPVwiTW92ZSBEb3duXCI+JiM4NjgxOzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJzb3J0YWJsZS1saXN0XCIgW25nQ2xhc3NdPVwibGlzdENsYXNzZXNcIj4gXG4gICAgICAgIDxsaSBkcmFnZ2FibGU9XCJ0cnVlXCIgKGNsaWNrKT1cInNlbGVjdEl0ZW0oaXRlbSlcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleDtcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpdGVtID09IHNlbGVjdGVkSXRlbX1cIiAoZHJvcCk9XCJvbkRyb3AoJGV2ZW50LCBpKVwiIChkcmFnb3Zlcik9XCJhbGxvd0Ryb3AoJGV2ZW50LGkpXCJcbiAgICAgICAgICAgIChkcmFnc3RhcnQpPVwib25EcmFnU3RhcnQoJGV2ZW50LCBpKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Atem9uZVwiIFtuZ0NsYXNzXT1cImRyb3B6b25lQ2xhc3Nlc1wiICpuZ0lmPVwib25EcmFnT3ZlckluZGV4ID09IGlcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cIltpdGVtXVwiIFtuZ0ZvclRlbXBsYXRlXT1cIml0ZW1UZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9saT5cbiAgICA8L3VsPlxuPC9kaXY+XG4iXX0=