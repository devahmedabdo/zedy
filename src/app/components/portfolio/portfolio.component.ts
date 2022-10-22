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
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}
  faceIcon = faFacebook;
  youtubeIcon = faYoutube;
  eyeIcon = faEye;
  ngOnInit(): void {}
}
