import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faYoutube,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faBehance,
  faGooglePay,
  faFacebookMessenger,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ZedyService } from 'src/app/services/zedy.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  faceIcon = faBehance;
  youtubeIcon = faYoutube;
  eyeIcon = faEye;
  config: any;
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.config = config['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getConfig();
  }
}
