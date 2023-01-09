import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';
@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
})
export class ClientPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        let lang = document.documentElement.lang;
        if (lang == 'ar') {
          document.title = 'عملاؤنا - ' + config['data'].ar_title;
        } else {
          document.title = 'Our Clients - ' + config['data'].title;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getConfig();
    this.zedy.goTop();
  }
}
