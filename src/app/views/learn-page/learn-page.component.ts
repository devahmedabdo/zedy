import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.scss'],
})
export class LearnPageComponent implements OnInit {
  clickEventSubscribtion: Subscription;
  constructor(private zedy: ZedyService) {
    this.clickEventSubscribtion = this.zedy.getItems().subscribe(() => {
      this.changeTitle();
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
    this.videos = await this.zedy.localApi('videos');
  }
  changeTitle() {
    this.zedy.changeTitle(this.constructor.name);
  }
  ngOnInit(): void {
    this.getVideos();
    this.changeTitle();
    this.zedy.goTop();
  }
}
