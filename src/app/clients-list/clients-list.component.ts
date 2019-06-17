import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  @Input() clients = [];
  displayedColumns: string[] = ['id', 'name'];


  ngOnInit(): void {
  }

}
