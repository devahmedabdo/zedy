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
  // clients: any[] = [];
  setClientType(type: string) {
    this.clientType = type;
    this.zedy.removeRveal();
  }
  types: any[] = [];
  clientType: string = 'all';
  getClient() {
    this.zedy.getClients().subscribe({
      next: (clients: any) => {
        this.clients = clients['data'];
        let type;
        clients['data'].forEach((e: any) => {
          if (e.field == null) {
            return;
          }
          type = e.field;
          if (JSON.stringify(this.types).includes(JSON.stringify(type))) {
            console.log('no');
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
