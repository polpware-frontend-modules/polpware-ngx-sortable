(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-sortable', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.polpware = global.polpware || {}, global.polpware['ngx-sortable'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            var _this = this;
            var item = this.items[this.draggedIndex];
            // Split the items at the dropped index.
            var pred = this.items.filter(function (_, i) { return i < droppedIndex && i !== _this.draggedIndex; });
            var succ = this.items.filter(function (_, i) { return i >= droppedIndex && i !== _this.draggedIndex; });
            // Cmobine them
            this.items = __spread(pred, [item], succ);
            this.draggedIndex = -1;
            this.onDragOverIndex = -1;
            this.listSorted.emit(this.items);
        };
        NgxSortableComponent.prototype.swapElements = function (oldIndex, newIndex) {
            var newItems = __spread(this.items);
            var temp = newItems[oldIndex];
            newItems[oldIndex] = newItems[newIndex];
            newItems[newIndex] = temp;
            this.items = newItems;
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
