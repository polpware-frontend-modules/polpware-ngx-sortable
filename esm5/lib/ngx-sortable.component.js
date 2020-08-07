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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvcnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtc29ydGFibGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQ3BELFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQU92QjtJQWdCSTtRQWJnQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsRUFBRSxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUc3RCxpQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDLENBQUM7SUFHcEMsQ0FBQztJQUVNLHlDQUFVLEdBQWpCLFVBQWtCLElBQVM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVNLHFDQUFNLEdBQWI7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2IsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sdUNBQVEsR0FBZjtRQUNJ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Q0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztnQkFDdkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUE5RlE7UUFBUixLQUFLLEVBQUU7dURBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3NEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs0REFBbUM7SUFDbEM7UUFBUixLQUFLLEVBQUU7MERBQWtDO0lBQ2pDO1FBQVIsS0FBSyxFQUFFO2tFQUFzQztJQUNyQztRQUFSLEtBQUssRUFBRTsrREFBbUM7SUFDbEM7UUFBUixLQUFLLEVBQUU7NkRBQWlDO0lBQ2hDO1FBQVIsS0FBSyxFQUFFO2lFQUFxQztJQUVuQztRQUFULE1BQU0sRUFBRTs0REFBMkQ7SUFDekM7UUFBMUIsWUFBWSxDQUFDLFdBQVcsQ0FBQzs4REFBOEM7SUFYL0Qsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsaW1DQUE0QztTQUUvQyxDQUFDO09BQ1csb0JBQW9CLENBZ0doQztJQUFELDJCQUFDO0NBQUEsQUFoR0QsSUFnR0M7U0FoR1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLFxuICAgIFRlbXBsYXRlUmVmLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BvbHAtbmd4LXNvcnRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmd4LXNvcnRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neFNvcnRhYmxlQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbXM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcHVibGljIHNob3dIZWFkZXI6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHB1YmxpYyByZVJlbmRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXJDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ2xhc3Nlczogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgcHVibGljIGxpc3RDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgZHJvcHpvbmVDbGFzc2VzOiBzdHJpbmcgPSAnJztcblxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbGlzdFNvcnRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8RWxlbWVudFJlZj47XG4gICAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55O1xuICAgIHB1YmxpYyBkcmFnZ2VkSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBvbkRyYWdPdmVySW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVVwKCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dhcEVsZW1lbnRzKGluZGV4LCBpbmRleCAtIDEpO1xuICAgICAgICB0aGlzLmxpc3RTb3J0ZWQuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZURvd24oKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN3YXBFbGVtZW50cyhpbmRleCwgaW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJvcCgkZXZlbnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIGluZGV4IGlzIG9mIHRoZSBlbGVtZW50IG9uIHdoaWNoIHRoZSBpdGVtIGlzIGRyb3BwZWRcbiAgICAgICAgdGhpcy5oYW5kbGVEcm9wKGluZGV4KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWxsb3dEcm9wKCRldmVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIC8vIGluZGV4IGlzIG9mIHRoZSBpdGVtIG9uIHdoaWNoIHRoZSBpdGVtIGlzIGN1cnJlbnRseSBob3ZlcmVkXG4gICAgICAgIHRoaXMub25EcmFnT3ZlckluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRHJhZ1N0YXJ0KCRldmVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuZHJhZ2dlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZURyb3AoZHJvcHBlZEluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5kcmFnZ2VkSW5kZXhdO1xuICAgICAgICAvLyBTcGxpdCB0aGUgaXRlbXMgYXQgdGhlIGRyb3BwZWQgaW5kZXguXG4gICAgICAgIGNvbnN0IHByZWQgPSB0aGlzLml0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSA8IGRyb3BwZWRJbmRleCAmJiBpICE9PSB0aGlzLmRyYWdnZWRJbmRleCk7XG4gICAgICAgIGNvbnN0IHN1Y2MgPSB0aGlzLml0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSA+PSBkcm9wcGVkSW5kZXggJiYgaSAhPT0gdGhpcy5kcmFnZ2VkSW5kZXgpO1xuICAgICAgICAvLyBDbW9iaW5lIHRoZW1cbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4ucHJlZCwgaXRlbSwgLi4uc3VjY107XG4gICAgICAgIGlmICh0aGlzLnJlUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXMubWFwKGEgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnZ2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5vbkRyYWdPdmVySW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5saXN0U29ydGVkLmVtaXQodGhpcy5pdGVtcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN3YXBFbGVtZW50cyhvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLnRoaXMuaXRlbXNdO1xuICAgICAgICBjb25zdCB0ZW1wID0gbmV3SXRlbXNbb2xkSW5kZXhdO1xuICAgICAgICBuZXdJdGVtc1tvbGRJbmRleF0gPSBuZXdJdGVtc1tuZXdJbmRleF07XG4gICAgICAgIG5ld0l0ZW1zW25ld0luZGV4XSA9IHRlbXA7XG5cbiAgICAgICAgaWYgKHRoaXMucmVSZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=