import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    let animationClass = document.querySelectorAll(
      '.lReveal , .dReveal,.uReveal,.rReveal'
    );
    animationClass.forEach((e) => {
      e.classList.add('reveal');
    });
  }
  ngOnInit(): void {}
}
