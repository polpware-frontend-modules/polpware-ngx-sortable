import { EventEmitter, TemplateRef, ElementRef } from '@angular/core';
export declare class NgxSortableComponent {
    items: any[];
    name: string;
    showHeader: boolean;
    reRender: boolean;
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
}
