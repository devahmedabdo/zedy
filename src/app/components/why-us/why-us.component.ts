import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  configuration: any;
  async ngOnInit() {
    this.zedy.get('employees').subscribe({
      next: (data) => {
        this.configuration = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
