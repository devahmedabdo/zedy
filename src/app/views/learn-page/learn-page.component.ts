import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.scss'],
})
export class LearnPageComponent implements OnInit {
  constructor() {}
  videos: any[] = [
    {
      name: 'video-1',
      title: 'video title',
    },
    {
      name: 'video-2',
      title: 'video title',
    },
    {
      name: 'video-3',
      title: 'video title',
    },
    {
      name: 'video-4',
      title: 'video title',
    },
    {
      name: 'video-1',
      title: 'video title',
    },
    {
      name: 'video-2',
      title: 'video title',
    },
    {
      name: 'video-3',
      title: 'video title',
    },
    {
      name: 'video-4',
      title: 'video title',
    },
    {
      name: 'video-1',
      title: 'video title',
    },
    {
      name: 'video-2',
      title: 'video title',
    },
    {
      name: 'video-3',
      title: 'video title',
    },
    {
      name: 'video-4',
      title: 'video title',
    },
    {
      name: 'video-1',
      title: 'video title',
    },
    {
      name: 'video-2',
      title: 'video title',
    },
    {
      name: 'video-3',
      title: 'video title',
    },
    {
      name: 'video-4',
      title: 'video title',
    },
  ];
  playVideo() {
    const btn = event?.target as HTMLElement;
    const video = btn.nextElementSibling as HTMLVideoElement;
    if (video) {
      video.play();
      btn.remove();
    }
  }

  ngOnInit(): void {}
}
