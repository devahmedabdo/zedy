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
  setClientType(type: string) {
    this.clientType = type;
    this.zedy.removeRveal();
  }
  types: any[] = [];
  clientType: string = 'all';
  getClient() {
    this.zedy.getSomeClients().subscribe({
      next: (clients: any) => {
        this.clients = clients['data'];

        let type;
        clients['data'].forEach((e: any) => {
          if (e.field == null) {
            return;
          }
          type = e.field;
          if (JSON.stringify(this.types).includes(JSON.stringify(type))) {
          } else {
            this.types.push(type);
          }
        });
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
