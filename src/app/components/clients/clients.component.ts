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
  sorted: any[] = [];
  setClientType(type: string) {
    this.clientType = type;
    this.sorted = this.maxLength(JSON.parse(JSON.stringify(this.clients)));
    this.zedy.removeRveal();
  }
  types: any[] = [];
  clientType: any = 'all';
  getClient() {
    this.zedy.get('clients').subscribe({
      next: (data) => {
        let type;
        this.clients = data.data;
        this.clients.forEach((e: any) => {
          if (e.field == null) {
            return;
          }
          type = e.field;
          if (!JSON.stringify(this.types).includes(JSON.stringify(type))) {
            this.types.push(type);
          }
        });
        this.sorted = this.maxLength(JSON.parse(JSON.stringify(this.clients)));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getSpecific(id: number) {
    let sort = this.clients.filter((ele) => {
      return ele.field.id == id;
    });

    this.sorted = this.maxLength(sort);

    this.clientType = id;
    this.zedy.removeRveal();
  }
  maxLength(array: any[]) {
    if (array.length > 12) array.length = 12;
    return array;
  }
  ngOnInit(): void {
    this.getClient();
  }
}
