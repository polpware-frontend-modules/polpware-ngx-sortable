import { Component, Input, Output, ContentChild, EventEmitter, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function NgxSortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label", 5);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.moveUp(); });
    i0.ɵɵtext(5, "\u21E7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 8);
    i0.ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.moveDown(); });
    i0.ɵɵtext(7, "\u21E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r7.dropzoneClasses);
} }
function NgxSortableComponent_li_3_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return [a0]; };
function NgxSortableComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 9);
    i0.ɵɵlistener("click", function NgxSortableComponent_li_3_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r10); const item_r5 = ctx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.selectItem(item_r5); })("drop", function NgxSortableComponent_li_3_Template_li_drop_0_listener($event) { i0.ɵɵrestoreView(_r10); const i_r6 = ctx.index; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onDrop($event, i_r6); })("dragover", function NgxSortableComponent_li_3_Template_li_dragover_0_listener($event) { i0.ɵɵrestoreView(_r10); const i_r6 = ctx.index; const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.allowDrop($event, i_r6); })("dragstart", function NgxSortableComponent_li_3_Template_li_dragstart_0_listener($event) { i0.ɵɵrestoreView(_r10); const i_r6 = ctx.index; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onDragStart($event, i_r6); });
    i0.ɵɵtemplate(1, NgxSortableComponent_li_3_div_1_Template, 1, 1, "div", 10);
    i0.ɵɵtemplate(2, NgxSortableComponent_li_3_ng_template_2_Template, 0, 0, "ng-template", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c0, item_r5 == ctx_r1.selectedItem));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.onDragOverIndex == i_r6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpureFunction1(6, _c1, item_r5))("ngForTemplate", ctx_r1.itemTemplate);
} }
export class NgxSortableComponent {
    constructor() {
        this.showHeader = true;
        this.containerClasses = '';
        this.headerClasses = '';
        this.listClasses = '';
        this.dropzoneClasses = '';
        this.listSorted = new EventEmitter();
        this.draggedIndex = -1;
        this.onDragOverIndex = -1;
    }
    selectItem(item) {
        this.selectedItem = item;
    }
    moveUp() {
        const index = this.items.indexOf(this.selectedItem);
        if (index === 0) {
            return;
        }
        this.swapElements(index, index - 1);
        this.listSorted.emit(this.items);
    }
    moveDown() {
        const index = this.items.indexOf(this.selectedItem);
        if (index === this.items.length - 1) {
            return;
        }
        this.swapElements(index, index + 1);
        this.listSorted.emit(this.items);
    }
    onDrop($event, index) {
        // index is of the element on which the item is dropped
        this.handleDrop(index);
    }
    allowDrop($event, index) {
        // index is of the item on which the item is currently hovered
        this.onDragOverIndex = index;
        $event.preventDefault();
    }
    onDragStart($event, index) {
        this.draggedIndex = index;
    }
    handleDrop(droppedIndex) {
        const item = this.items[this.draggedIndex];
        // Split the items at the dropped index.
        const pred = this.items.filter((_, i) => i < droppedIndex && i !== this.draggedIndex);
        const succ = this.items.filter((_, i) => i >= droppedIndex && i !== this.draggedIndex);
        // Cmobine them
        this.items = [...pred, item, ...succ];
        this.draggedIndex = -1;
        this.onDragOverIndex = -1;
        this.listSorted.emit(this.items);
    }
    swapElements(oldIndex, newIndex) {
        const newItems = [...this.items];
        const temp = newItems[oldIndex];
        newItems[oldIndex] = newItems[newIndex];
        newItems[newIndex] = temp;
        this.items = newItems;
    }
}
NgxSortableComponent.ɵfac = function NgxSortableComponent_Factory(t) { return new (t || NgxSortableComponent)(); };
NgxSortableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxSortableComponent, selectors: [["polp-ngx-sortable"]], contentQueries: function NgxSortableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    } }, inputs: { items: "items", name: "name", showHeader: "showHeader", containerClasses: "containerClasses", headerClasses: "headerClasses", listClasses: "listClasses", dropzoneClasses: "dropzoneClasses" }, outputs: { listSorted: "listSorted" }, decls: 4, vars: 4, consts: [[1, "sortable-container", 3, "ngClass"], ["class", "sortable-header", 3, "ngClass", 4, "ngIf"], [1, "sortable-list", 3, "ngClass"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart", 4, "ngFor", "ngForOf"], [1, "sortable-header", 3, "ngClass"], [1, "sortable-name"], [1, "sortable-buttons"], ["title", "Move Up", 3, "disabled", "click"], ["title", "Move Down", 3, "disabled", "click"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart"], ["class", "drop-zone", 3, "ngClass", 4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "drop-zone", 3, "ngClass"]], template: function NgxSortableComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvcnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtc29ydGFibGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXNvcnRhYmxlLmNvbXBvbmVudC50cyIsImxpYi9uZ3gtc29ydGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQ3BELFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNGbkIsOEJBQ0k7SUFBQSxnQ0FBNkI7SUFBQSxZQUFRO0lBQUEsaUJBQVE7SUFDN0MsOEJBQ0k7SUFBQSxpQ0FBc0U7SUFBOUQsb0xBQWtCO0lBQTRDLHNCQUFPO0lBQUEsaUJBQVM7SUFDdEYsaUNBQTBFO0lBQWxFLHNMQUFvQjtJQUE4QyxzQkFBTztJQUFBLGlCQUFTO0lBQzlGLGlCQUFNO0lBQ1YsaUJBQU07OztJQU51Qiw4Q0FBeUI7SUFDckIsZUFBUTtJQUFSLGlDQUFRO0lBRU4sZUFBMEI7SUFBMUIsK0NBQTBCO0lBQ3hCLGVBQTBCO0lBQTFCLCtDQUEwQjs7O0lBT3ZELDBCQUNNOzs7SUFEaUIsZ0RBQTJCOzs7Ozs7O0lBSHRELDZCQUdJO0lBSGlCLDBOQUEwQiw2TUFBQSx3TkFBQSw0TkFBQTtJQUczQywyRUFDQTtJQUNBLDJGQUNBO0lBQ0osaUJBQUs7Ozs7O0lBTkQsb0ZBQTRDO0lBRU8sZUFBNEI7SUFBNUIscURBQTRCO0lBRTVELGVBQWtCO0lBQWxCLDZEQUFrQixzQ0FBQTs7QURKakQsTUFBTSxPQUFPLG9CQUFvQjtJQWU3QjtRQVpnQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztR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UUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQzs7d0ZBM0VRLG9CQUFvQjt5REFBcEIsb0JBQW9CO29DQVVmLFdBQVc7Ozs7O1FDcEI3Qiw4QkFDSTtRQUFBLHFFQUNJO1FBTUosNkJBQ0k7UUFBQSxtRUFHSTtRQUtSLGlCQUFLO1FBQ1QsaUJBQU07O1FBbEIwQiw4Q0FBNEI7UUFDRCxlQUFrQjtRQUFsQixxQ0FBa0I7UUFPL0MsZUFBdUI7UUFBdkIseUNBQXVCO1FBQ0csZUFBMEM7UUFBMUMsbUNBQTBDOztrRERDckYsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsRUFBRTthQUNoQjs7a0JBRUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sWUFBWTttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLFxuICAgIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtbmd4LXNvcnRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LXNvcnRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neFNvcnRhYmxlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIHNob3dIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXJDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGxpc3RDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgZHJvcHpvbmVDbGFzc2VzOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGlzdFNvcnRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55O1xuICAgIHB1YmxpYyBkcmFnZ2VkSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBvbkRyYWdPdmVySW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVVwKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dhcEVsZW1lbnRzKGluZGV4LCBpbmRleCAtIDEpO1xuICAgICAgICB0aGlzLmxpc3RTb3J0ZWQuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZURvd24oKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN3YXBFbGVtZW50cyhpbmRleCwgaW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJvcCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyBpbmRleCBpcyBvZiB0aGUgZWxlbWVudCBvbiB3aGljaCB0aGUgaXRlbSBpcyBkcm9wcGVkXG4gICAgICAgIHRoaXMuaGFuZGxlRHJvcChpbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbG93RHJvcCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyBpbmRleCBpcyBvZiB0aGUgaXRlbSBvbiB3aGljaCB0aGUgaXRlbSBpcyBjdXJyZW50bHkgaG92ZXJlZFxuICAgICAgICB0aGlzLm9uRHJhZ092ZXJJbmRleCA9IGluZGV4O1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnU3RhcnQoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnZ2VkSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlRHJvcChkcm9wcGVkSW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmRyYWdnZWRJbmRleF07XG4gICAgICAgIC8vIFNwbGl0IHRoZSBpdGVtcyBhdCB0aGUgZHJvcHBlZCBpbmRleC5cbiAgICAgICAgY29uc3QgcHJlZCA9IHRoaXMuaXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpIDwgZHJvcHBlZEluZGV4ICYmIGkgIT09IHRoaXMuZHJhZ2dlZEluZGV4KTtcbiAgICAgICAgY29uc3Qgc3VjYyA9IHRoaXMuaXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpID49IGRyb3BwZWRJbmRleCAmJiBpICE9PSB0aGlzLmRyYWdnZWRJbmRleCk7XG4gICAgICAgIC8vIENtb2JpbmUgdGhlbVxuICAgICAgICB0aGlzLml0ZW1zID0gWy4uLnByZWQsIGl0ZW0sIC4uLnN1Y2NdO1xuXG4gICAgICAgIHRoaXMuZHJhZ2dlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMub25EcmFnT3ZlckluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMubGlzdFNvcnRlZC5lbWl0KHRoaXMuaXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzd2FwRWxlbWVudHMob2xkSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi50aGlzLml0ZW1zXTtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ld0l0ZW1zW29sZEluZGV4XTtcbiAgICAgICAgbmV3SXRlbXNbb2xkSW5kZXhdID0gbmV3SXRlbXNbbmV3SW5kZXhdO1xuICAgICAgICBuZXdJdGVtc1tuZXdJbmRleF0gPSB0ZW1wO1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic29ydGFibGUtY29udGFpbmVyXCIgW25nQ2xhc3NdPVwiY29udGFpbmVyQ2xhc3Nlc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJzb3J0YWJsZS1oZWFkZXJcIiBbbmdDbGFzc109XCJoZWFkZXJDbGFzc2VzXCIgKm5nSWY9XCJzaG93SGVhZGVyXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInNvcnRhYmxlLW5hbWVcIj57e25hbWV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb3J0YWJsZS1idXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJtb3ZlVXAoKVwiIFtkaXNhYmxlZF09XCIhc2VsZWN0ZWRJdGVtXCIgdGl0bGU9XCJNb3ZlIFVwXCI+JiM4Njc5OzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibW92ZURvd24oKVwiIFtkaXNhYmxlZF09XCIhc2VsZWN0ZWRJdGVtXCIgdGl0bGU9XCJNb3ZlIERvd25cIj4mIzg2ODE7PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDx1bCBjbGFzcz1cInNvcnRhYmxlLWxpc3RcIiBbbmdDbGFzc109XCJsaXN0Q2xhc3Nlc1wiPiBcbiAgICAgICAgPGxpIGRyYWdnYWJsZT1cInRydWVcIiAoY2xpY2spPVwic2VsZWN0SXRlbShpdGVtKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4O1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IGl0ZW0gPT0gc2VsZWN0ZWRJdGVtfVwiIChkcm9wKT1cIm9uRHJvcCgkZXZlbnQsIGkpXCIgKGRyYWdvdmVyKT1cImFsbG93RHJvcCgkZXZlbnQsaSlcIlxuICAgICAgICAgICAgKGRyYWdzdGFydCk9XCJvbkRyYWdTdGFydCgkZXZlbnQsIGkpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcC16b25lXCIgW25nQ2xhc3NdPVwiZHJvcHpvbmVDbGFzc2VzXCIgKm5nSWY9XCJvbkRyYWdPdmVySW5kZXggPT0gaVwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwiW2l0ZW1dXCIgW25nRm9yVGVtcGxhdGVdPVwiaXRlbVRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L2Rpdj5cbiJdfQ==