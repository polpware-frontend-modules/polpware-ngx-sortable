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
        $event.preventDefault();
        $event.stopPropagation();
        // index is of the element on which the item is dropped
        this.handleDrop(index);
    }
    allowDrop($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
        // index is of the item on which the item is currently hovered
        this.onDragOverIndex = index;
    }
    onDragStart($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvcnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtc29ydGFibGUvIiwic291cmNlcyI6WyJsaWIvbmd4LXNvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQ3BELFdBQVcsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQU92QixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWdCN0I7UUFiZ0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLHFCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUM5QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU1QixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHN0QsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBR3BDLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTTtRQUNULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDYixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFF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LENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUEvRlk7SUFBUixLQUFLLEVBQUU7bURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO2tEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTt3REFBbUM7QUFDbEM7SUFBUixLQUFLLEVBQUU7c0RBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFOzhEQUFzQztBQUNyQztJQUFSLEtBQUssRUFBRTsyREFBbUM7QUFDbEM7SUFBUixLQUFLLEVBQUU7eURBQWlDO0FBQ2hDO0lBQVIsS0FBSyxFQUFFOzZEQUFxQztBQUVuQztJQUFULE1BQU0sRUFBRTt3REFBMkQ7QUFDekM7SUFBMUIsWUFBWSxDQUFDLFdBQVcsQ0FBQzswREFBOEM7QUFYL0Qsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsaW1DQUE0QztLQUUvQyxDQUFDO0dBQ1csb0JBQW9CLENBZ0doQztTQWhHWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgQ29udGVudENoaWxkLCBFdmVudEVtaXR0ZXIsXG4gICAgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncG9scC1uZ3gtc29ydGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtc29ydGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4U29ydGFibGVDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIHB1YmxpYyBpdGVtczogYW55W107XG4gICAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBwdWJsaWMgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgcHVibGljIHJlUmVuZGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgcHVibGljIGNvbnRhaW5lckNsYXNzZXM6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDbGFzc2VzOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSBwdWJsaWMgbGlzdENsYXNzZXM6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHB1YmxpYyBkcm9wem9uZUNsYXNzZXM6IHN0cmluZyA9ICcnO1xuXG4gICAgQE91dHB1dCgpIHB1YmxpYyBsaXN0U29ydGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBwdWJsaWMgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPjtcbiAgICBwdWJsaWMgc2VsZWN0ZWRJdGVtOiBhbnk7XG4gICAgcHVibGljIGRyYWdnZWRJbmRleDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIG9uRHJhZ092ZXJJbmRleDogbnVtYmVyID0gLTE7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVXAoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zd2FwRWxlbWVudHMoaW5kZXgsIGluZGV4IC0gMSk7XG4gICAgICAgIHRoaXMubGlzdFNvcnRlZC5lbWl0KHRoaXMuaXRlbXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlRG93bigpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3dhcEVsZW1lbnRzKGluZGV4LCBpbmRleCArIDEpO1xuICAgICAgICB0aGlzLmxpc3RTb3J0ZWQuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Ecm9wKCRldmVudDogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gaW5kZXggaXMgb2YgdGhlIGVsZW1lbnQgb24gd2hpY2ggdGhlIGl0ZW0gaXMgZHJvcHBlZFxuICAgICAgICB0aGlzLmhhbmRsZURyb3AoaW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGxvd0Ryb3AoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gaW5kZXggaXMgb2YgdGhlIGl0ZW0gb24gd2hpY2ggdGhlIGl0ZW0gaXMgY3VycmVudGx5IGhvdmVyZWRcbiAgICAgICAgdGhpcy5vbkRyYWdPdmVySW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmFnU3RhcnQoJGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5kcmFnZ2VkSW5kZXggPSBpbmRleDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlRHJvcChkcm9wcGVkSW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1t0aGlzLmRyYWdnZWRJbmRleF07XG4gICAgICAgIC8vIFNwbGl0IHRoZSBpdGVtcyBhdCB0aGUgZHJvcHBlZCBpbmRleC5cbiAgICAgICAgY29uc3QgcHJlZCA9IHRoaXMuaXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpIDwgZHJvcHBlZEluZGV4ICYmIGkgIT09IHRoaXMuZHJhZ2dlZEluZGV4KTtcbiAgICAgICAgY29uc3Qgc3VjYyA9IHRoaXMuaXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpID49IGRyb3BwZWRJbmRleCAmJiBpICE9PSB0aGlzLmRyYWdnZWRJbmRleCk7XG4gICAgICAgIC8vIENtb2JpbmUgdGhlbVxuICAgICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5wcmVkLCBpdGVtLCAuLi5zdWNjXTtcbiAgICAgICAgaWYgKHRoaXMucmVSZW5kZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcy5tYXAoYSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gbmV3SXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdnZWRJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLm9uRHJhZ092ZXJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLmxpc3RTb3J0ZWQuZW1pdCh0aGlzLml0ZW1zKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3dhcEVsZW1lbnRzKG9sZEluZGV4OiBudW1iZXIsIG5ld0luZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4udGhpcy5pdGVtc107XG4gICAgICAgIGNvbnN0IHRlbXAgPSBuZXdJdGVtc1tvbGRJbmRleF07XG4gICAgICAgIG5ld0l0ZW1zW29sZEluZGV4XSA9IG5ld0l0ZW1zW25ld0luZGV4XTtcbiAgICAgICAgbmV3SXRlbXNbbmV3SW5kZXhdID0gdGVtcDtcblxuICAgICAgICBpZiAodGhpcy5yZVJlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IG5ld0l0ZW1zLm1hcChhID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBuZXdJdGVtcztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==