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
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from 'swiper';
import { ZedyService } from 'src/app/services/zedy.service';
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  config: SwiperOptions = {
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };
  configuration: any;
  socialLinks?: any[];
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.configuration = config['data'];
        console.log();
        console.log(this.configuration);
        this.socialLinks = [
          {
            icon: faFacebookF,
            link: this.configuration.facebook,
            color: '71 89 147',
          },
          {
            icon: faLinkedinIn,
            link: this.configuration.linkedin,
            color: '0 119 183',
          },
          {
            icon: faInstagram,
            link: this.configuration.instagram,
            color: '242 124 166',
          },
          {
            icon: faWhatsapp,
            link: 'https://wa.me/+2' + this.configuration.whatsapp,
            color: '122 208 109',
          },
          {
            icon: faYoutube,
            link: this.configuration.youtube,
            color: '255 0 0',
          },
          {
            icon: faBehance,
            link: this.configuration.behance,
            color: '30 109 255',
          },
          {
            icon: faLocationDot,
            link: this.configuration.location,
            color: '196 66 40',
          },
          {
            icon: faGooglePlay,
            link: this.configuration.google_play_link,
            color: '242 196 0',
          },
        ];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  playVideo() {
    const video = document.querySelector('iframe') as any;
    video.previousElementSibling?.remove();
    video.src += '?autoplay=1';
  }
  ngOnInit(): void {
    this.getConfig();
    setTimeout(() => {
      document.querySelector('.loading')?.classList.remove('loading');
    });
  }
}
