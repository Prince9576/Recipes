import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective {
    isOpen = false;
    constructor( private elementRef: ElementRef ) {}
    @HostListener('click') open = () => {
        this.isOpen = !this.isOpen;
        const target = this.elementRef.nativeElement.children[1];
        if ( !this.isOpen ) {
            target.className = 'dropdown-menu';
        } else {
            target.className += ' show';
        }
    }
}
