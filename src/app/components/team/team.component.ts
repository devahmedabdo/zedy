import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  constructor() {}
  team: any[] = [
    {
      name: 'Jackob Naser',
      image: 'jackob',
    },
    {
      name: 'Ali Ahmed',
      image: 'ali',
    },
    {
      name: 'Hassan Ali',
      image: 'hassan',
    },
    {
      name: 'Mostafa Ragab',
      image: 'mostafa',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
    },
    {
      name: 'Saleh Asser',
      image: 'saleh',
    },
    {
      name: 'Jackob Naser',
      image: 'jackob',
    },
    {
      name: 'Ali Ahmed',
      image: 'ali',
    },
    {
      name: 'Hassan Ali',
      image: 'hassan',
    },
    {
      name: 'Mostafa Ragab',
      image: 'mostafa',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
    },
    {
      name: 'Saleh Asser',
      image: 'saleh',
    },
    {
      name: 'Jackob Naser',
      image: 'jackob',
    },
    {
      name: 'Ali Ahmed',
      image: 'ali',
    },
    {
      name: 'Hassan Ali',
      image: 'hassan',
    },
    {
      name: 'Mostafa Ragab',
      image: 'mostafa',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
    },
    {
      name: 'Saleh Asser',
      image: 'saleh',
    },
    {
      name: 'Mostafa Ragab',
      image: 'mostafa',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
    },
    {
      name: 'Saleh Asser',
      image: 'saleh',
    },
  ];
  ngOnInit(): void {}
}
