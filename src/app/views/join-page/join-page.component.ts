import { Component, OnInit } from '@angular/core';
import { ZedyService } from 'src/app/services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
})
export class JoinPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {
    this.zedy.subject.subscribe(() => {
      this.changeTitle();
    });
  }
  changeTitle() {
    this.zedy.setTitle({
      ar: 'انضم إلينا',
      en: 'Join Us',
    });
  }
  jobs: any[] = [];
  maleJobs: any = [];
  femaleJobs: any = [];
  multiJobs: any = [];
  config: any;
  getData() {
    this.zedy.get('configrations').subscribe({
      next: (config) => {
        this.config = config;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.zedy.get('jobs').subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        this.maleJobs = this.jobs.filter((e) => e.type == 'ذكر');
        this.femaleJobs = this.jobs.filter((e) => e.type == 'انثي');
        this.multiJobs = this.jobs.filter((e) => e.type == 'انثي,ذكر');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async ngOnInit() {
    this.changeTitle();
    this.getData();
  }
}
