import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ZedyService } from 'src/app/services/zedy.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {
    this.zedy.subject.subscribe(() => {
      this.changeTitle();
    });
  }
  changeTitle() {
    this.zedy.setTitle({
      ar: 'خدماتنا',
      en: 'Services',
    });
  }
  ngOnInit(): void {
    this.changeTitle();
  }
}
