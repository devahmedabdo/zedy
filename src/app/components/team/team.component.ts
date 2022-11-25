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
  getTeam() {
    this.zedy.getTeam().subscribe({
      next: (team: any) => {
        this.team = team['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getTeam();
  }
}
