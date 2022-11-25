import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.scss'],
})
export class LearnPageComponent implements OnInit {
  constructor(private get: ZedyService) {}
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
    this.get.getVideos().subscribe(
      (videos: any) => {
        this.videos = videos.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.getVideos();
  }
}
