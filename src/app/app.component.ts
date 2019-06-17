import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteControllerService } from 'src/api';

export interface Pageable {
  content: Array<any>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  clients = [];

  constructor(private clienteService: ClienteControllerService){

  }

  ngOnInit() {
    this.clienteService.findAllUsingGET().subscribe( res => {
      console.log(res);
      this.clients = res.content;
    })
  }
}
