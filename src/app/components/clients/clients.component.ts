import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  clients: any[] = [];
  getClient() {
    this.zedy.getClients().subscribe({
      next: (clients: any) => {
        this.clients = clients['data'];
        if (this.clients.length > 12) {
          this.clients.length = 12;
        }
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
