import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
})
export class JoinPageComponent implements OnInit {
  constructor() {}
  jobs: any[] = [
    {
      job: 'General Manager',
      link: '',
    },
    {
      job: 'CEO Assistant',
      link: '',
    },
    {
      job: 'Media Buyer',
      link: '',
    },
    {
      job: 'Social Media Specialist',
      link: '',
    },
    {
      job: 'Social Media Moderator',
      link: '',
    },
    {
      job: 'Art Director',
      link: '',
    },
    {
      job: 'Graphic Designer',
      link: '',
    },
    {
      job: 'Office Manager',
      link: '',
    },
    {
      job: 'Motion Graphic Designer',
      link: '',
    },
  ];
  ngOnInit(): void {}
}
