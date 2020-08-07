import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵelement, ɵɵtemplate, ɵɵpureFunction1, EventEmitter, ɵɵdefineComponent, ɵɵcontentQuery, TemplateRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵsetClassMetadata, Component, Input, Output, ContentChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgClass, NgIf, NgForOf, CommonModule } from '@angular/common';

function NgxSortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵelementStart(1, "label", 5);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 6);
    ɵɵelementStart(4, "button", 7);
    ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_4_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.moveUp(); });
    ɵɵtext(5, "\u21E7");
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 8);
    ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_6_listener() { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.moveDown(); });
    ɵɵtext(7, "\u21E9");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.headerClasses);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.name);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r0.selectedItem);
    ɵɵadvance(2);
    ɵɵproperty("disabled", !ctx_r0.selectedItem);
} }
function NgxSortableComponent_li_3_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 12);
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r7.dropzoneClasses);
} }
function NgxSortableComponent_li_3_ng_template_2_Template(rf, ctx) { }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return [a0]; };
function NgxSortableComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 9);
    ɵɵlistener("click", function NgxSortableComponent_li_3_Template_li_click_0_listener() { ɵɵrestoreView(_r10); const item_r5 = ctx.$implicit; const ctx_r9 = ɵɵnextContext(); return ctx_r9.selectItem(item_r5); })("drop", function NgxSortableComponent_li_3_Template_li_drop_0_listener($event) { ɵɵrestoreView(_r10); const i_r6 = ctx.index; const ctx_r11 = ɵɵnextContext(); return ctx_r11.onDrop($event, i_r6); })("dragover", function NgxSortableComponent_li_3_Template_li_dragover_0_listener($event) { ɵɵrestoreView(_r10); const i_r6 = ctx.index; const ctx_r12 = ɵɵnextContext(); return ctx_r12.allowDrop($event, i_r6); })("dragstart", function NgxSortableComponent_li_3_Template_li_dragstart_0_listener($event) { ɵɵrestoreView(_r10); const i_r6 = ctx.index; const ctx_r13 = ɵɵnextContext(); return ctx_r13.onDragStart($event, i_r6); });
    ɵɵtemplate(1, NgxSortableComponent_li_3_div_1_Template, 1, 1, "div", 10);
    ɵɵtemplate(2, NgxSortableComponent_li_3_ng_template_2_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c0, item_r5 == ctx_r1.selectedItem));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.onDragOverIndex == i_r6);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpureFunction1(6, _c1, item_r5))("ngForTemplate", ctx_r1.itemTemplate);
} }
class NgxSortableComponent {
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
}
NgxSortableComponent.ɵfac = function NgxSortableComponent_Factory(t) { return new (t || NgxSortableComponent)(); };
NgxSortableComponent.ɵcmp = ɵɵdefineComponent({ type: NgxSortableComponent, selectors: [["polp-ngx-sortable"]], contentQueries: function NgxSortableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    } }, inputs: { items: "items", name: "name", showHeader: "showHeader", reRender: "reRender", containerClasses: "containerClasses", headerClasses: "headerClasses", listClasses: "listClasses", dropzoneClasses: "dropzoneClasses" }, outputs: { listSorted: "listSorted" }, decls: 4, vars: 4, consts: [[1, "sortable-container", 3, "ngClass"], ["class", "sortable-header", 3, "ngClass", 4, "ngIf"], [1, "sortable-list", 3, "ngClass"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart", 4, "ngFor", "ngForOf"], [1, "sortable-header", 3, "ngClass"], [1, "sortable-name"], [1, "sortable-buttons"], ["title", "Move Up", 3, "disabled", "click"], ["title", "Move Down", 3, "disabled", "click"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart"], ["class", "drop-zone", 3, "ngClass", 4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "drop-zone", 3, "ngClass"]], template: function NgxSortableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, NgxSortableComponent_div_1_Template, 8, 4, "div", 1);
        ɵɵelementStart(2, "ul", 2);
        ɵɵtemplate(3, NgxSortableComponent_li_3_Template, 3, 8, "li", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ctx.containerClasses);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showHeader);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ctx.listClasses);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [NgClass, NgIf, NgForOf], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxSortableComponent, [{
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

class NgxSortableModule {
}
NgxSortableModule.ɵmod = ɵɵdefineNgModule({ type: NgxSortableModule });
NgxSortableModule.ɵinj = ɵɵdefineInjector({ factory: function NgxSortableModule_Factory(t) { return new (t || NgxSortableModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxSortableModule, { declarations: [NgxSortableComponent], imports: [CommonModule], exports: [NgxSortableComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxSortableModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxSortableComponent],
                imports: [
                    CommonModule
                ],
                exports: [NgxSortableComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-sortable
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSortableComponent, NgxSortableModule };
//# sourceMappingURL=polpware-ngx-sortable.js.map
