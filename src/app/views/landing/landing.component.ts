import { Component, OnInit } from '@angular/core';
import {
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faBehance,
  faFacebookF,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}
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

  playVideo() {
    console.log(event?.target);
    const video = document.getElementById('learn-video') as HTMLVideoElement;
    video.previousElementSibling?.remove();
    if (video) {
      video.play();
    }
  }
  ngOnInit(): void {
    let scroll = document.querySelector('.scroll-bar') as HTMLElement;
    let section = document.querySelector('.opinion') as HTMLElement;
    scroll.style.width = `${section.scrollWidth}`;
    scroll?.addEventListener('scroll', () => {
      if (section) {
        section.scrollLeft = scroll.scrollLeft;
        console.log();
      }
    });
  }
}
