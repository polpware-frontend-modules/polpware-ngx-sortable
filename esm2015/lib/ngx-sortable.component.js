import { __decorate } from "tslib";
import { Component, Input, Output, ContentChild, EventEmitter, TemplateRef } from '@angular/core';
let NgxSortableComponent = class NgxSortableComponent {
    constructor() {
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
        $event.preventDefault();
        // index is of the item on which the item is currently hovered
        this.onDragOverIndex = index;
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
        const newItems = [...pred, item, ...succ];
        if (this.reRender) {
            this.items = newItems.map(a => {
                return Object.assign({}, a);
            });
        }
        else {
            this.items = newItems;
        }
        this.draggedIndex = -1;
        this.onDragOverIndex = -1;
        this.listSorted.emit(this.items);
    }
    swapElements(oldIndex, newIndex) {
        const newItems = [...this.items];
        const temp = newItems[oldIndex];
        newItems[oldIndex] = newItems[newIndex];
        newItems[newIndex] = temp;
        if (this.reRender) {
            this.items = newItems.map(a => {
                return Object.assign({}, a);
            });
        }
        else {
            this.items = newItems;
        }
    }
};
__decorate([
    Input()
], NgxSortableComponent.prototype, "items", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "name", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "showHeader", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "reRender", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "containerClasses", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "headerClasses", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "listClasses", void 0);
__decorate([
    Input()
], NgxSortableComponent.prototype, "dropzoneClasses", void 0);
__decorate([
    Output()
], NgxSortableComponent.prototype, "listSorted", void 0);
__decorate([
    ContentChild(TemplateRef)
], NgxSortableComponent.prototype, "itemTemplate", void 0);
NgxSortableComponent = __decorate([
    Component({
        selector: 'polp-ngx-sortable',
        template: "<div class=\"sortable-container\" [ngClass]=\"containerClasses\">\n    <div class=\"sortable-header\" [ngClass]=\"headerClasses\" *ngIf=\"showHeader\">\n        <label class=\"sortable-name\">{{name}}</label>\n        <div class=\"sortable-buttons\">\n            <button (click)=\"moveUp()\" [disabled]=\"!selectedItem\" title=\"Move Up\">&#8679;</button>\n            <button (click)=\"moveDown()\" [disabled]=\"!selectedItem\" title=\"Move Down\">&#8681;</button>\n        </div>\n    </div>\n    <ul class=\"sortable-list\" [ngClass]=\"listClasses\"> \n        <li draggable=\"true\" (click)=\"selectItem(item)\" *ngFor=\"let item of items; let i = index;\"\n            [ngClass]=\"{'active': item == selectedItem}\" (drop)=\"onDrop($event, i)\" (dragover)=\"allowDrop($event,i)\"\n            (dragstart)=\"onDragStart($event, i)\">\n            <div class=\"drop-zone\" [ngClass]=\"dropzoneClasses\" *ngIf=\"onDragOverIndex == i\">\n            </div>\n            <ng-template ngFor [ngForOf]=\"[item]\" [ngForTemplate]=\"itemTemplate\">\n            </ng-template>\n        </li>\n    </ul>\n</div>\n"
    })
], NgxSortableComponent);
export { NgxSortableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvcnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtc29ydGFibGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQ3BELFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQU92QixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWdCN0I7UUFiZ0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU1QixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0QsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBR3BDLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFF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QUNoQyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUN6QjtJQUNMLENBQUM7Q0FDSixDQUFBO0FBekZZO0lBQVIsS0FBSyxFQUFFO21EQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtrREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7d0RBQW1DO0FBQ2xDO0lBQVIsS0FBSyxFQUFFO3NEQUFrQztBQUNqQztJQUFSLEtBQUssRUFBRTs4REFBc0M7QUFDckM7SUFBUixLQUFLLEVBQUU7MkRBQW1DO0FBQ2xDO0lBQVIsS0FBSyxFQUFFO3lEQUFpQztBQUNoQztJQUFSLEtBQUssRUFBRTs2REFBcUM7QUFFbkM7SUFBVCxNQUFNLEVBQUU7d0RBQTJEO0FBQ3pDO0lBQTFCLFlBQVksQ0FBQyxXQUFXLENBQUM7MERBQThDO0FBWC9ELG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGltQ0FBNEM7S0FFL0MsQ0FBQztHQUNXLG9CQUFvQixDQTBGaEM7U0ExRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLFxuICAgIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtbmd4LXNvcnRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LXNvcnRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neFNvcnRhYmxlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIHNob3dIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZVJlbmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXJDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGxpc3RDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgZHJvcHpvbmVDbGFzc2VzOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGlzdFNvcnRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55O1xuICAgIHB1YmxpYyBkcmFnZ2VkSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBvbkRyYWdPdmVySW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVVwKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dhcEVsZW1lbnRzKGluZGV4LCBpbmRleCAtIDEpO1xuICAgICAgICB0aGlzLmxpc3RTb3J0ZWQuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZURvd24oKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN3YXBFbGVtZW50cyhpbmRleCwgaW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJvcCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyBpbmRleCBpcyBvZiB0aGUgZWxlbWVudCBvbiB3aGljaCB0aGUgaXRlbSBpcyBkcm9wcGVkXG4gICAgICAgIHRoaXMuaGFuZGxlRHJvcChpbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbG93RHJvcCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gaW5kZXggaXMgb2YgdGhlIGl0ZW0gb24gd2hpY2ggdGhlIGl0ZW0gaXMgY3VycmVudGx5IGhvdmVyZWRcbiAgICAgICAgdGhpcy5vbkRyYWdPdmVySW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnU3RhcnQoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnZ2VkSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlRHJvcChkcm9wcGVkSW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmRyYWdnZWRJbmRleF07XG4gICAgICAgIC8vIFNwbGl0IHRoZSBpdGVtcyBhdCB0aGUgZHJvcHBlZCBpbmRleC5cbiAgICAgICAgY29uc3QgcHJlZCA9IHRoaXMuaXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpIDwgZHJvcHBlZEluZGV4ICYmIGkgIT09IHRoaXMuZHJhZ2dlZEluZGV4KTtcbiAgICAgICAgY29uc3Qgc3VjYyA9IHRoaXMuaXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpID49IGRyb3BwZWRJbmRleCAmJiBpICE9PSB0aGlzLmRyYWdnZWRJbmRleCk7XG4gICAgICAgIC8vIENtb2JpbmUgdGhlbVxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5wcmVkLCBpdGVtLCAuLi5zdWNjXTtcbiAgICAgICAgaWYgKHRoaXMucmVSZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdnZWRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLm9uRHJhZ092ZXJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmxpc3RTb3J0ZWQuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3dhcEVsZW1lbnRzKG9sZEluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4udGhpcy5pdGVtc107XG4gICAgICAgIGNvbnN0IHRlbXAgPSBuZXdJdGVtc1tvbGRJbmRleF07XG4gICAgICAgIG5ld0l0ZW1zW29sZEluZGV4XSA9IG5ld0l0ZW1zW25ld0luZGV4XTtcbiAgICAgICAgbmV3SXRlbXNbbmV3SW5kZXhdID0gdGVtcDtcblxuICAgICAgICBpZiAodGhpcy5yZVJlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==