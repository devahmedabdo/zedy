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
  clickEventSubscribtion: Subscription;
  constructor(private zedy: ZedyService) {
    this.clickEventSubscribtion = this.zedy.getItems().subscribe(() => {
      this.changeTitle();
    });
  }
  changeTitle() {
    this.zedy.changeTitle(this.constructor.name);
  }
  ngOnInit(): void {
    this.changeTitle();
    this.zedy.goTop();
  }
}
