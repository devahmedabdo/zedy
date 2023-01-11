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
  async getTeam() {
    this.team = await this.zedy.localApi('team');
  }
  ngOnInit(): void {
    this.getTeam();
  }
}
