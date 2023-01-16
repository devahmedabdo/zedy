import { Component, OnInit } from '@angular/core';
import { ZedyService } from './services/zedy.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  whatsLink?: string;
  ngOnInit() {
    window.addEventListener('scroll', () => {
      let animationClasses = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClasses.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
    this.zedy.getData('configrations').subscribe({
      next: (config: any) => {
        let head = document.getElementsByTagName('head')[0];
        let body = document.getElementsByTagName('body')[0];

        if (config['data'].head_meta != null) {
          head.insertAdjacentHTML('beforeend', config['data'].head_meta);
        }
        if (config['data'].footer_meta != null) {
          body.insertAdjacentHTML('beforeend', config['data'].footer_meta);
        }
        this.whatsLink = 'https://wa.me/' + config['data'].whatsapp;
        window.localStorage.setItem(
          'configrations',
          JSON.stringify(config['data'])
        );
      },
    });
  }
  constructor(private zedy: ZedyService) {
    // Object.defineProperty(document, 'title', {
    //   // enumerable: true,
    //   // configurable: true,
    //   writable: true,
    //   value: 'asas',
    // });
  }
  title = 'zedy';
}
