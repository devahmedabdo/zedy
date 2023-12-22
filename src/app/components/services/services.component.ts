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
    // console.log(await this.zedy.localApi('services'));
    // this.config = await this.zedy.localApi('configrations');
    // this.services = await this.zedy.localApi('services');
    this.zedy.removeRveal();
  }
  // if (
  //   (await this.zedy.localApi('configrations')) &&
  //   (await this.zedy.localApi('services'))
  // ) {
  //   this.config = await this.zedy.localApi('configrations');
  //   this.services = await this.zedy.localApi('services');
  //   this.zedy.removeRveal();
  // } else {
  //   await this.zedy.getData('services').subscribe({
  //     next: (data: any) => {
  //       this.services = data['data'];
  //       this.zedy.removeRveal();
  //     },
  //   });
  //   await this.zedy.getData('configrations').subscribe({
  //     next: (data: any) => {
  //       this.config = data['data'];
  //     },
  //   });
  // }
}
