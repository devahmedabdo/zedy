import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss']
})
export class OpinionsComponent implements OnInit {

  constructor() { }
  opinions: any[] = [
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
    {
      name: 'Ahmed Abdo',
      image: 'ahmed',
      jop: 'Marketing',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
    },
  ];
  ngOnInit(): void {
  }

}
