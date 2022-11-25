import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngOnInit(): void {}
  // ngAfterViewInit(): void {
  //   let animationClass = document.querySelectorAll(
  //     '.lReveal , .dReveal,.uReveal,.rReveal'
  //   );
  //   animationClass.forEach((e) => {
  //     e.classList.add('reveal');
  //   });
  //   setTimeout(() => {
  //     document.querySelector('.loading')?.classList.remove('loading');
  //   });
  // }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    setTimeout(() => {
      document.querySelector('.loading')?.classList.remove('loading');
    });
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
}
