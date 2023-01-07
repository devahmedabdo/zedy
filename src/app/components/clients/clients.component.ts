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
  getSpecific(type: string) {
    this.zedy.getClients().subscribe({
      next: (clients: any) => {
        let typeArr: any = [];
        console.log(clients['data']);
        clients['data'].forEach((ele: any) => {
          if (type == 'all') {
            typeArr.push(ele);
          } else if (ele.field?.name == type) {
            typeArr.push(ele);
          }
        });
        if (typeArr.length > 12) {
          typeArr.length = 12;
        }
        this.clients = typeArr;
        this.zedy.removeRveal();
        // console.log(clients['data']);
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
