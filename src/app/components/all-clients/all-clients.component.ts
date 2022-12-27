import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.scss'],
})
export class AllClientsComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  clients: any[] = [
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type1',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type1',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type2',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type2',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type3',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type4',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type2',
      en_type: 'entype',
    },
    {
      asd: 'asd',
      asd1: 'asd',
      asd3: 'asd',
      asd4: 'asd',
      type: 'type5',
      en_type: 'entype',
    },
  ];
  // clients: any[] = [];
  setClientType(type: string) {
    this.clientType = type;
  }
  types: any[] = [];
  clientType: string = 'all';
  getClient() {
    this.zedy.getClients().subscribe({
      next: (clients: any) => {
        this.clients = clients['data'];

        clients['data'].forEach((e: any) => {
          let type = {
            ar_field: e.type,
            en_field: e.en_type,
          };
          if (!this.types.includes(type)) {
            this.types.push(type);
          }
        });
        console.log(this.clients);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnInit(): void {
    // this.clients.forEach((e: any) => {
    //   let type = new Object({
    //     ar_field: e.type,
    //     en_field: e.en_type,
    //   });
    //   let rebeatedTypeArray = [];
    //   rebeatedTypeArray.push(type);
    //   let element: any = {
    //     ar_field: '',
    //   };
    //   rebeatedTypeArray.forEach((e: any) => {
    //     if (e.ar_field == element.ar_field) {
    //       console.log('no');
    //     } else {
    //       this.types.push(e);
    //     }
    //   });
    //   // if (this.types.includes(type)) {
    //   //   return;
    //   // }
    //   // if()
    //   // this.types.reduce((this.types[0],));
    // });
    // if(this.clients.filter(e))
    // console.log(this.types);
    this.getClient();
  }
}
