import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;
  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
