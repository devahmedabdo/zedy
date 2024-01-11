import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() whatsLink?: string;
  @Input() activeMenu!: boolean;
  @Output() activeMenuChange = new EventEmitter<boolean>();

  whatsapp = faWhatsapp;
  ngOnInit(): void {}
  toggleMenu(value: boolean) {
    this.activeMenuChange.emit(!value);
  }
}
