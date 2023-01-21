import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  // clickEventSubscribtion: Subscription;
  // constructor(private zedy: ZedyService) {
  //   this.clickEventSubscribtion = this.zedy.getItems().subscribe(() => {
  //     this.changeTitle();
  //   });
  // }
  changeTitle() {
    this.zedy.changeTitle('AboutPageComponent');
  }
  ngOnInit(): void {
    // this.changeTitle();
    this.zedy.goTop();
  }
}
