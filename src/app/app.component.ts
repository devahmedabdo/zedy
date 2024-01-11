import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
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
  lang: string = localStorage.getItem('lang') || 'ar';
  loading: boolean = true;
  loaded: boolean = false;
  ngOnInit() {
    window.addEventListener('scroll', () => {
      let animationClasses = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClasses.forEach((e) => {
        if (
          e.getBoundingClientRect().top -
            document.documentElement.clientHeight <
          -100
        ) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
    this.active = false;
  }
  getData() {
    this.zedy.get('configrations').subscribe({
      next: (data: any) => {
        this.config = data.data;
        this.loading = false;
        setTimeout(() => {
          this.loaded = true;
        }, 1000);
        let head = document.getElementsByTagName('head')[0];
        let body = document.getElementsByTagName('body')[0];
        if (this.config.head_meta != null) {
          head.insertAdjacentHTML('beforeend', this.config.head_meta);
        }
        if (this.config.footer_meta != null) {
          body.insertAdjacentHTML('beforeend', this.config.footer_meta);
        }
        this.whatsLink = 'https://wa.me/' + this.config.whatsapp;

        if (this.lang == 'ar') {
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
      },
    });
  }
  activate() {
    const scrollOptions: ScrollToOptions = {
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    };
    window.scroll(scrollOptions);
    this.active = false;
    console.log(this.active);
  }
  constructor(private zedy: ZedyService, private meta: Meta) {
    this.getData();
  }
  title = 'zedy';
  active: any;
}
