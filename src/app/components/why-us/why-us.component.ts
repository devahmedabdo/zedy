import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  whyUs: any[] = [
    {
      text: '6 Years of experience',
      image: 'experience',
    },
    {
      text: 'More than 300 clients served',
      image: 'rate',
    },
    {
      text: 'Team of more than 30 worker',
      image: 'team',
    },
    {
      text: 'More than 10K designs',
      image: 'designs',
    },
    {
      text: 'More than 250 videos',
      image: 'videos',
    },
    {
      text: 'Complete service in one place',
      image: 'place',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
