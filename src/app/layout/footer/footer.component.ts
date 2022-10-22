import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faBehance,
  faFacebookF,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  constructor() {}
  lang: string = document.documentElement.lang;
  callIcon = faPhone;
  faLocationDot = faLocationDot;
  socialLinks: any[] = [
    {
      icon: faFacebookF,
      link: '#',
      color: '71 89 147',
    },
    {
      icon: faLinkedinIn,
      link: '#',
      color: '0 119 183',
    },
    {
      icon: faInstagram,
      link: '#',
      color: '242 124 166',
    },
    {
      icon: faWhatsapp,
      link: '#',
      color: '122 208 109',
    },
    {
      icon: faYoutube,
      link: '#',
      color: '255 0 0',
    },
    {
      icon: faBehance,
      link: '#',
      color: '30 109 255',
    },
    {
      icon: faLocationDot,
      link: '#',
      color: '196 66 40',
    },
    {
      icon: faGooglePlay,
      link: '#',
      color: '242 196 0',
    },
  ];
  ngOnInit(): void {
    let copyright = document.getElementById('copyright') as HTMLElement;
    let year = new Date().getFullYear();
    copyright.innerHTML = `${year}`;
  }
}
