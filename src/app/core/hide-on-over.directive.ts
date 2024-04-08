import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[enfisize-on-over]',
  standalone: true
})
export class EnfasizeOnOverDirective {


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement, 'enfasized');
 }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'enfasized');
  }

}
