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
