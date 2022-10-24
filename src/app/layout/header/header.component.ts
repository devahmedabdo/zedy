import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  lang: string = 'en';
  toggelMenu() {
    let toggeler = document.querySelectorAll('#toggeler,#nav-menu');
    toggeler.forEach((e) => {
      e.classList.toggle('active');
    });
  }
  removeActive(arr: any, link?: any) {
    arr.forEach((e: any) => {
      e.classList.remove('active');
    });
    link ? link.classList.add('active') : '';
  }
  toggleActive() {
    document.querySelector('.lang-menu')?.classList.toggle('active');
  }
  setLang(lang: any) {
    this.toggleActive;
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.setLang(this.lang);

    //scroll to top on click and close menu
    let navLink = document.querySelectorAll('header nav ul li');
    navLink.forEach((e) => {
      e.addEventListener('click', () => {
        this.removeActive(toggeler);
        window.scrollTo(0, 0);
      });
    });
    //close menu when scroll
    let toggeler = document.querySelectorAll('#toggeler,#nav-menu');
    window.addEventListener('scroll', () => {
      this.removeActive(toggeler);
    });
  }
}
