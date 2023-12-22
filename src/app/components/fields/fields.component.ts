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
    this.zedy.get('fields').subscribe({
      next: (fields) => {
        this.fields = fields;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
