import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-us',
  templateUrl: './find-us.component.html',
  styleUrls: ['./find-us.component.scss']
})
export class FindUsComponent implements OnInit {

  constructor() { }
  countries: any[] = [
    {
      name: 'Egypt',
      img: 'egypt',
    },
    {
      name: 'KSA',
      img: 'ksa',
    },
    {
      name: 'Kuwait',
      img: 'kuwait',
    },
    {
      name: 'Bahrain',
      img: 'bahrain',
    },
    {
      name: 'UAE',
      img: 'uae',
    },
    {
      name: 'USA',
      img: 'usa',
    },
  ];
  ngOnInit(): void {
  }

}
