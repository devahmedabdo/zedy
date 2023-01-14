import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  configuration: any;
  async ngOnInit() {
    this.configuration = await this.zedy.localApi('configrations');
  }
}
