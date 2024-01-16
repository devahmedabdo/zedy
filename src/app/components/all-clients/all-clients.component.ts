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
  setClientType(type: string) {
    this.clientType = type;
    this.zedy.removeRveal();
  }
  types: any[] = [];
  clientType: string = 'all';
  getClient() {
    this.zedy.get('clients').subscribe({
      next: (data) => {
        this.clients = data.data;
        let type;
        this.clients.forEach((e: any) => {
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
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.getClient();
  }
}
