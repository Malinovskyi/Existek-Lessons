import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective implements OnInit {
  @Input() appTest!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    if (this.appTest === 'Borders' || this.appTest === 'Avon') {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }
}
