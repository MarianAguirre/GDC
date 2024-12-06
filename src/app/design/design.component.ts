import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  private scrollElements: HTMLElement[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Selecciona todos los elementos con `data-scroll` dentro del componente
    this.scrollElements = this.el.nativeElement.querySelectorAll('[data-scroll]');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    this.scrollElements.forEach((element) => {
      const rect = element.getBoundingClientRect();

      if (rect.top < windowHeight && rect.bottom > 0) {
        // Agrega una clase para iniciar la animación solo una vez
        if (!element.classList.contains('start-animation')) {
          this.renderer.addClass(element, 'start-animation');
        }
      }
    });
  }
}
