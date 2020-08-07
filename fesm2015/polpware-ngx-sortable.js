import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, ContentChild, TemplateRef, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

let NgxSortableModule = class NgxSortableModule {
};
NgxSortableModule = __decorate([
    NgModule({
        declarations: [NgxSortableComponent],
        imports: [
            CommonModule
        ],
        exports: [NgxSortableComponent]
    })
], NgxSortableModule);

/*
 * Public API Surface of ngx-sortable
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSortableComponent, NgxSortableModule };
//# sourceMappingURL=polpware-ngx-sortable.js.map
