import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngAfterViewInit(): void {
    document.querySelector('.loading')?.classList.remove('loading');
  }
  ngOnInit(): void {}
}
