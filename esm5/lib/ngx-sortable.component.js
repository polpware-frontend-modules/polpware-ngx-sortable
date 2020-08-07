import { __decorate, __read, __spread } from "tslib";
import { Component, Input, Output, ContentChild, EventEmitter, TemplateRef } from '@angular/core';
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
        // index is of the element on which the item is dropped
        this.handleDrop(index);
    };
    NgxSortableComponent.prototype.allowDrop = function ($event, index) {
        $event.preventDefault();
        // index is of the item on which the item is currently hovered
        this.onDragOverIndex = index;
    };
    NgxSortableComponent.prototype.onDragStart = function ($event, index) {
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
    return NgxSortableComponent;
}());
export { NgxSortableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvcnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtc29ydGFibGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQ3BELFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQU92QjtJQWdCSTtRQWJnQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc3RCxpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFHcEMsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLElBQVM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFDQUFNLEdBQWI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sdUNBQVEsR0FBZjtRQUNJ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QUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBeEZRO1FBQVIsS0FBSyxFQUFFO3VEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtzREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7NERBQW1DO0lBQ2xDO1FBQVIsS0FBSyxFQUFFOzBEQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTtrRUFBc0M7SUFDckM7UUFBUixLQUFLLEVBQUU7K0RBQW1DO0lBQ2xDO1FBQVIsS0FBSyxFQUFFOzZEQUFpQztJQUNoQztRQUFSLEtBQUssRUFBRTtpRUFBcUM7SUFFbkM7UUFBVCxNQUFNLEVBQUU7NERBQTJEO0lBQ3pDO1FBQTFCLFlBQVksQ0FBQyxXQUFXLENBQUM7OERBQThDO0lBWC9ELG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGltQ0FBNEM7U0FFL0MsQ0FBQztPQUNXLG9CQUFvQixDQTBGaEM7SUFBRCwyQkFBQztDQUFBLEFBMUZELElBMEZDO1NBMUZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlcixcbiAgICBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwb2xwLW5neC1zb3J0YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1zb3J0YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTb3J0YWJsZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXTtcbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBzaG93SGVhZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBwdWJsaWMgcmVSZW5kZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBwdWJsaWMgY29udGFpbmVyQ2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGhlYWRlckNsYXNzZXM6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBsaXN0Q2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGRyb3B6b25lQ2xhc3Nlczogc3RyaW5nID0gJyc7XG5cbiAgICBAT3V0cHV0KCkgcHVibGljIGxpc3RTb3J0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYpIHB1YmxpYyBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+O1xuICAgIHB1YmxpYyBzZWxlY3RlZEl0ZW06IGFueTtcbiAgICBwdWJsaWMgZHJhZ2dlZEluZGV4OiBudW1iZXIgPSAtMTtcbiAgICBwdWJsaWMgb25EcmFnT3ZlckluZGV4OiBudW1iZXIgPSAtMTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW06IGFueSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVVcCgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN3YXBFbGVtZW50cyhpbmRleCwgaW5kZXggLSAxKTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVEb3duKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zd2FwRWxlbWVudHMoaW5kZXgsIGluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMubGlzdFNvcnRlZC5lbWl0KHRoaXMuaXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyb3AoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8gaW5kZXggaXMgb2YgdGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIGl0ZW0gaXMgZHJvcHBlZFxuICAgICAgICB0aGlzLmhhbmRsZURyb3AoaW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGxvd0Ryb3AoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIGluZGV4IGlzIG9mIHRoZSBpdGVtIG9uIHdoaWNoIHRoZSBpdGVtIGlzIGN1cnJlbnRseSBob3ZlcmVkXG4gICAgICAgIHRoaXMub25EcmFnT3ZlckluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0KCRldmVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZURyb3AoZHJvcHBlZEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5kcmFnZ2VkSW5kZXhdO1xuICAgICAgICAvLyBTcGxpdCB0aGUgaXRlbXMgYXQgdGhlIGRyb3BwZWQgaW5kZXguXG4gICAgICAgIGNvbnN0IHByZWQgPSB0aGlzLml0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSA8IGRyb3BwZWRJbmRleCAmJiBpICE9PSB0aGlzLmRyYWdnZWRJbmRleCk7XG4gICAgICAgIGNvbnN0IHN1Y2MgPSB0aGlzLml0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSA+PSBkcm9wcGVkSW5kZXggJiYgaSAhPT0gdGhpcy5kcmFnZ2VkSW5kZXgpO1xuICAgICAgICAvLyBDbW9iaW5lIHRoZW1cbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4ucHJlZCwgaXRlbSwgLi4uc3VjY107XG4gICAgICAgIGlmICh0aGlzLnJlUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnZ2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5vbkRyYWdPdmVySW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN3YXBFbGVtZW50cyhvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLnRoaXMuaXRlbXNdO1xuICAgICAgICBjb25zdCB0ZW1wID0gbmV3SXRlbXNbb2xkSW5kZXhdO1xuICAgICAgICBuZXdJdGVtc1tvbGRJbmRleF0gPSBuZXdJdGVtc1tuZXdJbmRleF07XG4gICAgICAgIG5ld0l0ZW1zW25ld0luZGV4XSA9IHRlbXA7XG5cbiAgICAgICAgaWYgKHRoaXMucmVSZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=