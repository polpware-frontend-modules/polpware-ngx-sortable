(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-sortable', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-sortable'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    function NgxSortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
        var _r3 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 4);
        core.ɵɵelementStart(1, "label", 5);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "div", 6);
        core.ɵɵelementStart(4, "button", 7);
        core.ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_4_listener() { core.ɵɵrestoreView(_r3); var ctx_r2 = core.ɵɵnextContext(); return ctx_r2.moveUp(); });
        core.ɵɵtext(5, "\u21E7");
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "button", 8);
        core.ɵɵlistener("click", function NgxSortableComponent_div_1_Template_button_click_6_listener() { core.ɵɵrestoreView(_r3); var ctx_r4 = core.ɵɵnextContext(); return ctx_r4.moveDown(); });
        core.ɵɵtext(7, "\u21E9");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r0 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", ctx_r0.headerClasses);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r0.name);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", !ctx_r0.selectedItem);
        core.ɵɵadvance(2);
        core.ɵɵproperty("disabled", !ctx_r0.selectedItem);
    } }
    function NgxSortableComponent_li_3_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "div", 12);
    } if (rf & 2) {
        var ctx_r7 = core.ɵɵnextContext(2);
        core.ɵɵproperty("ngClass", ctx_r7.dropzoneClasses);
    } }
    function NgxSortableComponent_li_3_ng_template_2_Template(rf, ctx) { }
    var _c0 = function (a0) { return { "active": a0 }; };
    var _c1 = function (a0) { return [a0]; };
    function NgxSortableComponent_li_3_Template(rf, ctx) { if (rf & 1) {
        var _r10 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "li", 9);
        core.ɵɵlistener("click", function NgxSortableComponent_li_3_Template_li_click_0_listener() { core.ɵɵrestoreView(_r10); var item_r5 = ctx.$implicit; var ctx_r9 = core.ɵɵnextContext(); return ctx_r9.selectItem(item_r5); })("drop", function NgxSortableComponent_li_3_Template_li_drop_0_listener($event) { core.ɵɵrestoreView(_r10); var i_r6 = ctx.index; var ctx_r11 = core.ɵɵnextContext(); return ctx_r11.onDrop($event, i_r6); })("dragover", function NgxSortableComponent_li_3_Template_li_dragover_0_listener($event) { core.ɵɵrestoreView(_r10); var i_r6 = ctx.index; var ctx_r12 = core.ɵɵnextContext(); return ctx_r12.allowDrop($event, i_r6); })("dragstart", function NgxSortableComponent_li_3_Template_li_dragstart_0_listener($event) { core.ɵɵrestoreView(_r10); var i_r6 = ctx.index; var ctx_r13 = core.ɵɵnextContext(); return ctx_r13.onDragStart($event, i_r6); });
        core.ɵɵtemplate(1, NgxSortableComponent_li_3_div_1_Template, 1, 1, "div", 10);
        core.ɵɵtemplate(2, NgxSortableComponent_li_3_ng_template_2_Template, 0, 0, "ng-template", 11);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var item_r5 = ctx.$implicit;
        var i_r6 = ctx.index;
        var ctx_r1 = core.ɵɵnextContext();
        core.ɵɵproperty("ngClass", core.ɵɵpureFunction1(4, _c0, item_r5 == ctx_r1.selectedItem));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r1.onDragOverIndex == i_r6);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", core.ɵɵpureFunction1(6, _c1, item_r5))("ngForTemplate", ctx_r1.itemTemplate);
    } }
    var NgxSortableComponent = /** @class */ (function () {
        function NgxSortableComponent() {
            this.showHeader = true;
            this.containerClasses = '';
            this.headerClasses = '';
            this.listClasses = '';
            this.dropzoneClasses = '';
            this.listSorted = new core.EventEmitter();
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
            // index is of the item on which the item is currently hovered
            this.onDragOverIndex = index;
            $event.preventDefault();
        };
        NgxSortableComponent.prototype.onDragStart = function ($event, index) {
            this.draggedIndex = index;
        };
        NgxSortableComponent.prototype.handleDrop = function (droppedIndex) {
            var item = this.items[this.draggedIndex];
            this.items.splice(this.draggedIndex, 1);
            this.items.splice(droppedIndex, 0, item);
            this.draggedIndex = -1;
            this.onDragOverIndex = -1;
            this.listSorted.emit(this.items);
        };
        NgxSortableComponent.prototype.swapElements = function (oldIndex, newIndex) {
            var temp = this.items[oldIndex];
            this.items[oldIndex] = this.items[newIndex];
            this.items[newIndex] = temp;
        };
        NgxSortableComponent.ɵfac = function NgxSortableComponent_Factory(t) { return new (t || NgxSortableComponent)(); };
        NgxSortableComponent.ɵcmp = core.ɵɵdefineComponent({ type: NgxSortableComponent, selectors: [["polp-ngx-sortable"]], contentQueries: function NgxSortableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
                core.ɵɵcontentQuery(dirIndex, core.TemplateRef, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
            } }, inputs: { items: "items", name: "name", showHeader: "showHeader", containerClasses: "containerClasses", headerClasses: "headerClasses", listClasses: "listClasses", dropzoneClasses: "dropzoneClasses" }, outputs: { listSorted: "listSorted" }, decls: 4, vars: 4, consts: [[1, "sortable-container", 3, "ngClass"], ["class", "sortable-header", 3, "ngClass", 4, "ngIf"], [1, "sortable-list", 3, "ngClass"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart", 4, "ngFor", "ngForOf"], [1, "sortable-header", 3, "ngClass"], [1, "sortable-name"], [1, "sortable-buttons"], ["title", "Move Up", 3, "disabled", "click"], ["title", "Move Down", 3, "disabled", "click"], ["draggable", "true", 3, "ngClass", "click", "drop", "dragover", "dragstart"], ["class", "drop-zone", 3, "ngClass", 4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], [1, "drop-zone", 3, "ngClass"]], template: function NgxSortableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵtemplate(1, NgxSortableComponent_div_1_Template, 8, 4, "div", 1);
                core.ɵɵelementStart(2, "ul", 2);
                core.ɵɵtemplate(3, NgxSortableComponent_li_3_Template, 3, 8, "li", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵproperty("ngClass", ctx.containerClasses);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.showHeader);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngClass", ctx.listClasses);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngForOf", ctx.items);
            } }, directives: [common.NgClass, common.NgIf, common.NgForOf], encapsulation: 2 });
        return NgxSortableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxSortableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'polp-ngx-sortable',
                    templateUrl: './ngx-sortable.component.html',
                    styleUrls: []
                }]
        }], function () { return []; }, { items: [{
                type: core.Input
            }], name: [{
                type: core.Input
            }], showHeader: [{
                type: core.Input
            }], containerClasses: [{
                type: core.Input
            }], headerClasses: [{
                type: core.Input
            }], listClasses: [{
                type: core.Input
            }], dropzoneClasses: [{
                type: core.Input
            }], listSorted: [{
                type: core.Output
            }], itemTemplate: [{
                type: core.ContentChild,
                args: [core.TemplateRef]
            }] }); })();

    var NgxSortableModule = /** @class */ (function () {
        function NgxSortableModule() {
        }
        NgxSortableModule.ɵmod = core.ɵɵdefineNgModule({ type: NgxSortableModule });
        NgxSortableModule.ɵinj = core.ɵɵdefineInjector({ factory: function NgxSortableModule_Factory(t) { return new (t || NgxSortableModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return NgxSortableModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(NgxSortableModule, { declarations: [NgxSortableComponent], imports: [common.CommonModule], exports: [NgxSortableComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NgxSortableModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [NgxSortableComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [NgxSortableComponent]
                }]
        }], null, null); })();

    exports.NgxSortableComponent = NgxSortableComponent;
    exports.NgxSortableModule = NgxSortableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polpware-ngx-sortable.umd.js.map
