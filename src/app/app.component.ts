import { Component, OnInit } from '@angular/core';
import { ZedyService } from './services/zedy.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    let lang = document.documentElement.lang;
    let keyword = document.getElementsByTagName('meta')[2];
    let description = document.getElementsByTagName('meta')[3];

    // if (lang == 'ar') {
    //   keyword.setAttribute(
    //     'content',
    //     'الزيدي ، تسويق ، شركة ، عبدالرحمن الزيدي ، برمجة ، موقع الكتروني ، وكالة، سوشيال ميديا، فيديوهات، إعلانات'
    //   );
    //   description.setAttribute(
    //     'content',
    //     'الموقع الرسمي لشركة الزيدي لخدمات التسويق و البرمجة '
    //   );
    //   document.title = 'زيدي لخدمات التسويق';
    // } else {
    //   console.log('en');
    //   keyword.setAttribute(
    //     'content',
    //     'zedy, marketing, business, agency, abdelrahman elzedy , software, website, social media, multi media, videos'
    //   );
    //   description.setAttribute(
    //     'content',
    //     'Zedy Marketing & Software Agency Official Page'
    //   );
    //   document.title = 'Zedy Marketing Agency';
    // }
    // console.log(lang);
    window.addEventListener('scroll', () => {
      let animationClass = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClass.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        let head = document.getElementsByTagName('head')[0];
        let body = document.getElementsByTagName('body')[0];

        if (config['data'].head_meta != null) {
          head.insertAdjacentHTML('beforeend', config['data'].head_meta);
        }
        if (config['data'].footer_meta != null) {
          body.insertAdjacentHTML('beforeend', config['data'].footer_meta);
        }
        // let keyword = document.getElementsByTagName('meta')[2];
        // let description = document.getElementsByTagName('meta')[3];
        // if (lang == 'ar') {
        //   keyword.setAttribute('content', config['data'].header_keywords);
        //   description.setAttribute('content', config['data'].description);
        // } else {
        //   keyword.setAttribute('content', config['data'].en_header_keywords);
        //   description.setAttribute('content', config['data'].en_description);
        // }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  constructor(private zedy: ZedyService) {}
  title = 'zedy';
  // ngAfterViewChecked() {
  //   console.log('after checked');
  // }
  ngOnChange() {
    console.log('ngOnChange');
  }
  // ngDoCheck() {
  //   console.log('do checked');
  // }
  // ngAfterContentInit() {
  //   console.log('content');
  // }
  // ngAfterContentChecked() {
  //   console.log('content checked');
  // }
  // ngAfterViewInit() {
  //   console.log('view');
  //   setTimeout(() => {
  //     console.log('view 1');
  //   });
  // }
}
