import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent implements OnInit {
  clickEventSubscribtion: Subscription;
  constructor(private zedy: ZedyService) {
    this.clickEventSubscribtion = this.zedy.getItems().subscribe(() => {
      this.changeTitle();
    });
  }
  changeTitle() {
    this.zedy.changeTitle('ClientPageComponent');
  }
  ngOnInit(): void {
    this.changeTitle();
    this.zedy.goTop();
  }
}
