import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clients = [];

  constructor(http: HttpClient){
    http
    .get('http://localhost:8080/cliente')
    .subscribe(clients => this.clients = clients.content);
  }
}

