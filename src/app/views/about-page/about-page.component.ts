import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        let lang = document.documentElement.lang;
        if (lang == 'ar') {
          console.log(this.constructor.name);
          document.title = 'من نحن - ' + config['data'].ar_title;
        } else {
          document.title = 'About Us - ' + config['data'].title;
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
