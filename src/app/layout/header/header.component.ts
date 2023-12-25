import { Component, Input, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  @Input() whatsLink?: string;
  lang: string = 'en';
  whatsapp = faWhatsapp;
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
  ngOnInit(): void {
    //close menu when scroll
    let toggeler = document.querySelectorAll('#toggeler,#nav-menu');
    window.addEventListener('scroll', () => {
      this.removeActive(toggeler);
    });
  }
}
