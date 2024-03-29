import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  team: any[] = [];
  ngOnInit(): void {
    this.zedy.get('employees').subscribe({
      next: (data) => {
        this.team = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
