import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightPrice]'
})
export class HighlightPriceDirective implements OnInit {

  @Input() color: string;

  constructor(private element: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,
      'backgroundColor', this.color);

  }

}
