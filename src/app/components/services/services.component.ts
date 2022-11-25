import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  services: any[] = [];
  getServices() {
    this.zedy.getServices().subscribe({
      next: (services: any) => {
        this.services = services['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  config: any;
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.config = config['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getServices();
    this.getConfig();
  }
}
