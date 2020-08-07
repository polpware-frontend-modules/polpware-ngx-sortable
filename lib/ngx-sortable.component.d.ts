import { EventEmitter, TemplateRef, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxSortableComponent {
    items: any[];
    name: string;
    showHeader: boolean;
    containerClasses: string;
    headerClasses: string;
    listClasses: string;
    dropzoneClasses: string;
    listSorted: EventEmitter<any>;
    itemTemplate: TemplateRef<ElementRef>;
    selectedItem: any;
    draggedIndex: number;
    onDragOverIndex: number;
    constructor();
    selectItem(item: any): void;
    moveUp(): void;
    moveDown(): void;
    onDrop($event: any, index: number): void;
    allowDrop($event: any, index: number): void;
    onDragStart($event: any, index: number): void;
    handleDrop(droppedIndex: number): void;
    swapElements(oldIndex: number, newIndex: number): void;
    static ɵfac: i0.ɵɵFactoryDef<NgxSortableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NgxSortableComponent, "polp-ngx-sortable", never, { "items": "items"; "name": "name"; "showHeader": "showHeader"; "containerClasses": "containerClasses"; "headerClasses": "headerClasses"; "listClasses": "listClasses"; "dropzoneClasses": "dropzoneClasses"; }, { "listSorted": "listSorted"; }, ["itemTemplate"], never>;
}
