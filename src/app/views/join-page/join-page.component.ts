import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
})
export class JoinPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  jobs: any[] = [];
  maleJobs: any = [];
  femaleJobs: any = [];
  multiJobs: any = [];
  config: any;
  getJobs() {
    this.zedy.getJobs().subscribe({
      next: (jobs: any) => {
        this.jobs = jobs['data'];
        this.maleJobs = this.jobs.filter((e) => e.type == 'ذكر');
        this.femaleJobs = this.jobs.filter((e) => e.type == 'انثي');
        this.multiJobs = this.jobs.filter((e) => e.type == 'انثي,ذكر');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        this.config = config['data'];
        let lang = document.documentElement.lang;
        if (lang == 'ar') {
          console.log(this.constructor.name);
          document.title = 'انضم إلينا - ' + config['data'].ar_title;
        } else {
          document.title = 'Join Us - ' + config['data'].title;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getConfig();
    this.getJobs();
    this.zedy.goTop();
  }
}
