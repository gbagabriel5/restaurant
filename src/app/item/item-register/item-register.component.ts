import { Component, OnInit } from '@angular/core';
import {
  ItemCategoryControllerService, ItemCategoryDto,
  ItemControllerService, ItemDto,
  ProviderControllerService, ProviderDto
} from '../../../api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RxwebValidators} from "@rxweb/reactive-form-validators";

@Component({
  selector: 'app-item-register',
  templateUrl: './item-register.component.html',
  styleUrls: ['./item-register.component.css']
})
export class ItemRegisterComponent implements OnInit {
  public categoryList: ItemCategoryDto[] = [];
  public providerList: ProviderDto[] = [];
  public selectedCategory: ItemCategoryDto;
  public selectedProvider: ProviderDto;
  public formItem: FormGroup;
  units: string[] = ['UN', 'KG', 'LT'];

  public item: ItemDto = new class implements ItemDto {
    cost: number;
    id: number;
    itemCategoryDto: ItemCategoryDto;
    minQuantity: number;
    name: string;
    price: number;
    providerDto: ProviderDto;
    quantity: number;
    shelfLife: number;
    status: string;
    unit: string;
  };

  constructor(
    private itemService: ItemControllerService,
    private categoryService: ItemCategoryControllerService,
    private providerService: ProviderControllerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getData();
    this.formBuild();
  }
  private getData() {
    this.categoryService.getAllUsingGET2().subscribe(category => {
      this.categoryList = category.content;
      this.formBuild();
    });
    this.providerService.getAllUsingGET6().subscribe( provider => {
      this.providerList = provider.content;
      this.formBuild();
    });
  }
  private formBuild() {
    this.formItem = this.formBuilder.group({
      id: [this.item.id],
      name: [this.item.name, Validators.compose([
        RxwebValidators.required()
      ])],
      price: [this.item.price, Validators.compose([
        RxwebValidators.required()
      ])],
      cost: [this.item.cost, Validators.compose([
        RxwebValidators.required()
      ])],
      unit: [this.item.unit, Validators.compose([
        RxwebValidators.required()
      ])],
      quantity: [this.item.quantity, Validators.compose([
        RxwebValidators.required()
      ])],
      minQuantity: [this.item.minQuantity, Validators.compose([
        RxwebValidators.required()
      ])],
      shelfLife: [this.item.shelfLife, Validators.compose([
        RxwebValidators.required()
      ])],
      itemCategoryDto: [this.item.itemCategoryDto, Validators.compose([
        RxwebValidators.required()
      ])],
      providerDto: [this.item.providerDto, Validators.compose([
        RxwebValidators.required()
      ])]
    });
  }
  private setItem() {
    this.item.id = null;
    this.item.name = this.formItem.value.name;
    this.item.price = this.formItem.value.price;
    this.item.cost = this.formItem.value.cost;
    this.item.unit = this.formItem.value.unit;
    this.item.quantity = this.formItem.value.quantity;
    this.item.minQuantity = this.formItem.value.minQuantity;
    this.item.shelfLife = this.formItem.value.shelfLife;
    this.item.status = null;
    this.item.itemCategoryDto = this.formItem.value.itemCategoryDto;
    this.item.providerDto = this.formItem.value.providerDto;
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.formItem.get(controlName).hasError(errorName);
  }
  public save() {
    this.setItem();
    console.log(this.item);
    this.itemService.createUsingPOST3(this.item).subscribe(items => console.log(items));
  }
}
