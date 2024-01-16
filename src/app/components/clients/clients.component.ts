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
    // this.clients = await this.zedy.localApi('clients');
    this.zedy.get('clients').subscribe({
      next: (data) => {
        let type;
        this.clients = data.data;
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
        if (this.clients.length > 12) {
          this.clients.length = 12;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getSpecific(type: string) {
    this.zedy.get('clients').subscribe({
      next: (client) => {
        let typeArr: any = [];

        client.data.forEach((ele: any) => {
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
