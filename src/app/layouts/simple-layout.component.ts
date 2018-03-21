import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './simple-layout.component.html'
})
export class SimpleLayoutComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'simple-layout');
    this.renderer.removeClass(document.body, 'full-layout');
  }

  ngOnInit(): void {  }
}
