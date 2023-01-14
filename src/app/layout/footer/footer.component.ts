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
import { ZedyService } from 'src/app/services/zedy.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  year: number = new Date().getFullYear();
  callIcon = faPhone;
  faLocationDot = faLocationDot;
  config: any;
  socialLinks?: any[];
  async getConfig() {
    this.config = await this.zedy.localApi('configrations');
    this.socialLinks = [
      {
        icon: faFacebookF,
        link: this.config.facebook,
        color: '71 89 147',
      },
      {
        icon: faLinkedinIn,
        link: this.config.linkedin,
        color: '0 119 183',
      },
      {
        icon: faInstagram,
        link: this.config.instagram,
        color: '242 124 166',
      },
      {
        icon: faWhatsapp,
        link: 'https://wa.me/+2' + this.config.whatsapp,
        color: '122 208 109',
      },
      {
        icon: faYoutube,
        link: this.config.youtube,
        color: '255 0 0',
      },
      {
        icon: faBehance,
        link: this.config.behance,
        color: '30 109 255',
      },
      {
        icon: faLocationDot,
        link: this.config.location,
        color: '196 66 40',
      },
      {
        icon: faGooglePlay,
        link: this.config.google_play_link,
        color: '242 196 0',
      },
    ];
  }
  ngOnInit() {
    this.getConfig();
  }
}
