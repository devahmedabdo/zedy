import { Component, OnInit } from '@angular/core';
import { ZedyService } from './../../services/zedy.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  constructor(private zedy: ZedyService) {}
  fields: any[] = [];
  async ngOnInit() {
    this.fields = await this.zedy.localApi('fields');
  }
}
