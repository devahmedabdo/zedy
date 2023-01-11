import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
})
export class JoinPageComponent implements OnInit {
  clickEventSubscribtion: Subscription;
  constructor(private zedy: ZedyService) {
    this.clickEventSubscribtion = this.zedy.getItems().subscribe(() => {
      this.changeTitle();
    });
  }
  jobs: any[] = [];
  maleJobs: any = [];
  femaleJobs: any = [];
  multiJobs: any = [];
  config: any;
  async getJobs() {
    this.jobs = await this.zedy.localApi('jobs');
    this.maleJobs = this.jobs.filter((e) => e.type == 'ذكر');
    this.femaleJobs = this.jobs.filter((e) => e.type == 'انثي');
    this.multiJobs = this.jobs.filter((e) => e.type == 'انثي,ذكر');
  }

  changeTitle() {
    this.zedy.changeTitle(this.constructor.name);
  }

  async ngOnInit() {
    this.config = await this.zedy.localApi('configuration');
    this.changeTitle();
    this.getJobs();
    this.zedy.goTop();
  }
}
