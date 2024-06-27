import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private zedy: ZedyService) {
    this.zedy.subject.subscribe({
      next: (data) => {
        console.log(data);
        this.lang = data;
        console.log(this.lang);
      },
    });
    this.log();
  }
  services: any[] = [];
  config: any;
  lang: any = localStorage.getItem('lang');
  ngOnInit() {
    this.zedy.get('services').subscribe({
      next: (data) => {
        this.config = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.zedy.get('services').subscribe({
      next: (data) => {
        this.services = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.zedy.removeRveal();
  }
  log() {
    console.log(this.lang);
  }
}
