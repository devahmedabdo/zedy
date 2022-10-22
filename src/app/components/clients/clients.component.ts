import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  constructor() {}
  clients: any[] = [
    {
      name: 'Mcdonalds',
      image: 'mac',
      field: 'Restaurant series',
    },
    {
      name: 'Dominos',
      image: 'domino',
      field: 'Restaurant series',
    },
    {
      name: 'Microsoft',
      image: 'microsoft',
      field: 'Programming ',
    },
    {
      name: 'Mercedes',
      image: 'mercedes',
      field: 'Cars',
    },
    {
      name: 'Mcdonalds',
      image: 'mac',
      field: 'Restaurant series',
    },
    {
      name: 'Dominos',
      image: 'domino',
      field: 'Restaurant series',
    },
    {
      name: 'Microsoft',
      image: 'microsoft',
      field: 'Programming ',
    },
    {
      name: 'Mercedes',
      image: 'mercedes',
      field: 'Cars',
    },
    {
      name: 'Mcdonalds',
      image: 'mac',
      field: 'Restaurant series',
    },
    {
      name: 'Dominos',
      image: 'domino',
      field: 'Restaurant series',
    },
    {
      name: 'Microsoft',
      image: 'microsoft',
      field: 'Programming ',
    },
    {
      name: 'Mercedes',
      image: 'mercedes',
      field: 'Cars',
    },
  ];
  ngOnInit(): void {}
}
