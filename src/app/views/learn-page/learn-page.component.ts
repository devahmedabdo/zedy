import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';
@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.scss'],
})
export class LearnPageComponent implements OnInit {
  videos: any[] = [];
  pagination: any = {
    page: 0,
    total: 0,
    limit: 33,
  };
  loading: any = true;
  constructor(private zedy: ZedyService) {
    this.zedy.subject.subscribe(() => {
      this.changeTitle();
    });
  }
  ngOnInit(): void {
    this.getVideos(1);
    this.changeTitle();
  }
  playVideo(btn: any): void {
    let playBtn = btn.target as HTMLElement;
    let video = playBtn.nextElementSibling as HTMLEmbedElement;
    if (video) {
      video.src += '?autoplay=1';
      playBtn.remove();
    }
  }
  getVideos(page: any) {
    this.loading = true;
    this.zedy
      .get(
        'videos?type=videos&limit=' +
          this.pagination.limit +
          '&page=' +
          page +
          '&skip=' +
          this.pagination.limit * this.pagination.page
      )
      .subscribe({
        next: (videos) => {
          console.log('videos', videos);
          this.loading = false;
          this.videos.push(...videos.data);
          this.pagination.page = page;
          this.pagination.total = videos.total;
        },
        error: (err) => {
          this.loading = false;
          console.log(err);
        },
      });
  }
  changeTitle() {
    this.zedy.setTitle({
      ar: 'تعلم معنا',
      en: 'Learn With Us',
    });
  }
}
