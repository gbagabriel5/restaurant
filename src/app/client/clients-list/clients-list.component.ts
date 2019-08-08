import { Component, OnInit } from '@angular/core';
import {ClientControllerService, ClientDto} from '../../../api';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'rg'];

  public dataSource: ClientDto[];

  constructor(private clientController: ClientControllerService) { }

  ngOnInit() {
    this.clientController.getAllUsingGET1().subscribe((clients) => this.dataSource = clients.content);
  }

}
