import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  configuration: any;
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.configuration = config['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  constructor(private zedy: ZedyService) {}

  ngOnInit(): void {
    this.getConfig();
  }
}
