import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ZedyService } from './services/zedy.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  whatsLink?: string;
  config: any;
  async ngOnInit() {
    let lang = localStorage.getItem('lang') || 'ar';
    window.addEventListener('load', () => {
      let loading = document.getElementById('loading');
      loading?.classList.add('hide');
      setTimeout(() => {
        loading?.remove();
      }, 1000);
    });
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
    this.config = await this.zedy.localApi('configrations');
    let head = document.getElementsByTagName('head')[0];
    let body = document.getElementsByTagName('body')[0];
    if (this.config.head_meta != null) {
      head.insertAdjacentHTML('beforeend', this.config.head_meta);
    }
    if (this.config.footer_meta != null) {
      body.insertAdjacentHTML('beforeend', this.config.footer_meta);
    }
    this.whatsLink = 'https://wa.me/' + this.config.whatsapp;

    if (lang == 'ar') {
      this.meta.updateTag({
        name: 'keywords',
        content: this.config.header_keywords,
      });
      this.meta.updateTag({
        name: 'description',
        content: this.config.description,
      });
    } else {
      this.meta.updateTag({
        name: 'keywords',
        content: this.config.en_header_keywords,
      });
      this.meta.updateTag({
        name: 'description',
        content: this.config.en_description,
      });
    }
  }
  constructor(private zedy: ZedyService, private meta: Meta) {}
  title = 'zedy';
}
