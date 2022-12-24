import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.scss'],
})
export class LearnPageComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  videos: any[] = [];
  playVideo(btn: any): void {
    let playBtn = btn.target as HTMLElement;
    let video = playBtn.nextElementSibling as HTMLEmbedElement;
    if (video) {
      video.src += '?autoplay=1';
      playBtn.remove();
    }
  }
  getVideos() {
    this.zedy.getVideos().subscribe(
      (videos: any) => {
        this.videos = videos.data;
        console.log(this.videos);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getConfig() {
    this.zedy.getConfig().subscribe({
      next: (config: any) => {
        let lang = document.documentElement.lang;
        if (lang == 'ar') {
          console.log(this.constructor.name);
          document.title = 'تعلم معنا - ' + config['data'].ar_title;
        } else {
          document.title = 'Learn With Us - ' + config['data'].title;
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getVideos();
    this.getConfig();
  }
}
