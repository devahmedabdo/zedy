import { Component, OnInit } from '@angular/core';
import { ZedyService } from './services/zedy.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  whatsLink?: string;
  ngOnInit(): void {
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
          'configuration',
          JSON.stringify(config['data'])
        );
      },
    });
    this.zedy.api.forEach((e: string) => {
      let setLocal = async (position: string, data: any) => {
        let strData = await JSON.stringify(data);
        window.localStorage.setItem(position, strData);
      };
      this.zedy.getData(e).subscribe({
        next: (data: any) => {
          switch (e) {
            case 'videos?type=videos':
              setLocal('videos', data['data']);
              break;
            case 'clients':
              setLocal('clients', data['data']);
              break;
            case 'employees':
              setLocal('team', data['data']);
              break;
            case 'services':
              setLocal('services', data['data']);
              break;
            case 'fields':
              setLocal('fields', data['data']);
              break;
            case 'jobs':
              setLocal('jobs', data['data']);
              break;
            case 'client-reviews':
              setLocal('review', data['data']);
              break;
          }
        },
      });
    });
  }

  constructor(private zedy: ZedyService) {}
  title = 'zedy';
}
