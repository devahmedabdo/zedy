import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor() {}
  fields: any[] = [
    {
      name: 'Realestate',
      image: 'Realestate',
    },
    {
      name: 'Restaurant',
      image: 'Restaurant',
    },
    {
      name: 'Doctors',
      image: 'Doctors',
    },
    {
      name: 'Hospitals',
      image: 'Hospitals',
    },
    {
      name: 'Stores',
      image: 'Stores',
    },
    {
      name: 'Factories',
      image: 'Factories',
    },
    {
      name: 'Schools',
      image: 'Schools',
    },
    {
      name: 'Libraries',
      image: 'Libraries',
    },
    {
      name: 'Companies',
      image: 'Companies',
    },
    {
      name: 'Development agencies',
      image: 'Development agencies',
    },
    {
      name: 'Government interests',
      image: 'Government interests',
    },
  ];
  ngOnInit(): void {}
}
