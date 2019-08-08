import { Component, OnInit } from '@angular/core';
import {ItemControllerService, ItemDto} from '../../../api';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'cost', 'unit', 'quantity', 'minQuantity', 'shelfLife', 'status', 'providerName', 'categoryName'];

  public dataSource: ItemDto[];

  constructor(private itemController: ItemControllerService) { }

  ngOnInit() {
    this.itemController.getAllUsingGET3().subscribe((items) => this.dataSource = items.content);
  }
}
