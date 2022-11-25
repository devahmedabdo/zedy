import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.scss'],
})
export class AllClientsComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  clients: any[] = [];
  getClient() {
    this.zedy.getClients().subscribe({
      next: (clients: any) => {
        this.clients = clients['data'];
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    this.getClient();
  }
}
