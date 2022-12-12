import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesPageComponent implements OnInit {
  constructor() {}
  loading() {
    setTimeout(() => {
      document.querySelector('.loading')?.classList.remove('loading');
      let animationClass = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      window.onload = () => {
        animationClass.forEach((e) => {
          e.classList.add('reveal');
        });
      };
    }, 100);
  }
  ngOnInit(): void {
    this.loading();
  }
}
