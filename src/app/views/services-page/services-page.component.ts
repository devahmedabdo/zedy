import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesPageComponent implements OnInit, AfterViewInit {
  constructor() {}
  loading() {
    setTimeout(() => {
      document.querySelector('.loading')?.classList.remove('loading');
      let animationClass = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      window.onload = () => {
        console.log('awd');
        animationClass.forEach((e) => {
          e.classList.add('reveal');
        });
      };
    }, 100);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngOnInit(): void {
    this.loading();
  }
  ngAfterContentInit() {
    console.log('ngAfterViewInit');
  }
}
