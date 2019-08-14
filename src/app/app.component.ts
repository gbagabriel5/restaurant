import {Component, OnInit, ViewChild} from '@angular/core';
import {MatIconRegistry, MatSidenav} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('food', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/item.svg'));
    iconRegistry.addSvgIcon('store', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/store.svg'));
    iconRegistry.addSvgIcon('clients', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clientes.svg'));
    iconRegistry.addSvgIcon('estoque', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/estoque.svg'));
  }

  ngOnInit() {
  }
}
