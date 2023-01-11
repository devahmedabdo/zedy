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
  config: any;
  getConfig() {}
  async ngOnInit() {
    this.config = await this.zedy.localApi('configuration');
    this.services = await this.zedy.localApi('services');
    this.zedy.removeRveal();
  }
}
