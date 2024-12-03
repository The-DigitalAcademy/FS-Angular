import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCarHighlight]'
})
export class CarHighlightDirective {

  @Input('appCarHighlight') shouldHighlight: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    if (this.shouldHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid blue');
      this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
      this.renderer.removeStyle(this.el.nativeElement, 'padding');
    }
  }

}
