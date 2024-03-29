import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {
    this.changeTitle();
    this.zedy.subject.subscribe(() => {
      this.changeTitle();
    });
  }
  changeTitle() {
    console.log('asd');
    this.zedy.setTitle({
      ar: 'عملاؤنا',
      en: 'Our Clients',
    });
  }
  ngOnInit(): void {}
}
