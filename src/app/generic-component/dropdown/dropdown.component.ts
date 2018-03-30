import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';

@Component({
    selector: '<ac-dropdown>',
    queries: {
        itemTemplate: new ContentChild(TemplateRef)
    },
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})

export class DropDownComponent<T>{
    @Input()
    public enabledItems: Array<T>;
    
    public isOpen: boolean = false;

    @Input()
    public items: Array<T>;

    @Input()
    public name: string;

    @Output()
    public optionSelected = new EventEmitter();

    @Input()
    public selectedItem: T;

    public clearSelection() {

        this.optionSelected.emit({
            selected: false,
            item: this.selectedItem
        });

        this.selectedItem = null;
    }

    public closeDropdown() {
        this.isOpen = false;
    }   

    public selectItem(clickedOption: T) {
        this.selectedItem = clickedOption;
        this.closeDropdown();

        this.optionSelected.emit({
            selected: true,
            item: this.selectedItem
        });
    }

    public toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
}