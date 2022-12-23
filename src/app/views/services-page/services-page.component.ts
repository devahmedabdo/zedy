import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        let lang = document.documentElement.lang;
        if (lang == 'ar') {
          console.log(this.constructor.name);
          document.title = 'خدماتنا - ' + config['data'].ar_title;
        } else {
          document.title = 'Services - ' + config['data'].title;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getConfig();
  }
}
