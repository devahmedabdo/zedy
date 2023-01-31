import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  constructor() {}
  top = faArrowUp;
  hide: boolean = false;
  lastScroll: number = 0;
  ngOnInit(): void {
    this.lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      if (this.lastScroll < window.scrollY) {
        this.hide = true;
      } else {
        this.hide = false;
      }
      this.lastScroll = window.scrollY;
    });
  }
}
