import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

export interface Pageable {
  content: Array<any>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;

  constructor() {
  }

  ngOnInit() {
  }
}
