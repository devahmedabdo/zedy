import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.scss'],
})
export class LearnPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {
    this.zedy.subject.subscribe(() => {
      this.changeTitle();
    });
  }
  changeTitle() {
    this.zedy.setTitle({
      ar: 'تعلم معنا',
      en: 'Learn With Us',
    });
  }
  videos: any[] = [];
  playVideo(btn: any): void {
    let playBtn = btn.target as HTMLElement;
    let video = playBtn.nextElementSibling as HTMLEmbedElement;
    if (video) {
      video.src += '?autoplay=1';
      playBtn.remove();
    }
  }
  async getVideos() {
    this.zedy.get('videos?type=videos').subscribe({
      next: (videos) => {
        console.log('landing', videos);
        this.videos = videos;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getVideos();
    this.changeTitle();
  }
}
