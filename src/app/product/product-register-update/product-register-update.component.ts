import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  ItemControllerService,
  ItemDto, PageItemDto,
  ProductCategoryControllerService,
  ProductCategoryDto,
  ProductControllerService,
  ProductDto, ProductItemDto,
} from '../../../api';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {RxwebValidators} from '@rxweb/reactive-form-validators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-product-register-update',
  templateUrl: './product-register-update.component.html',
  styleUrls: ['./product-register-update.component.css']
})
export class ProductRegisterUpdateComponent implements OnInit {
  public  productForm: FormGroup ;
  public selectedCategory: ProductCategoryDto;
  public categoryList: ProductCategoryDto[] = [];
  public edit = false;
  public items: ItemDto[];
  public fichaTecnica: ItemDto[] = [];
  // tslint:disable-next-line:new-parens
  private product: ProductDto = new class implements ProductDto {
    cost: number;
    id: number;
    minQuantity: number;
    name: string;
    price: number;
    productCategoryDto: ProductCategoryDto;
    productItemDtos: ProductItemDto[];
    control: string;
    quantity: number;
    status: string;
  };

  constructor(private productService: ProductControllerService,
              private categoryService: ProductCategoryControllerService,
              private itemService: ItemControllerService,
              private formBuilder: FormBuilder,
              private mensageSnack: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    this.formBuild();
    this.route.params.subscribe(params => {

      if (params.id !== undefined) {
        this.edit = true;
        this.productService.findByIdUsingGET5(params.id).subscribe((res: ProductDto) => {
          this.product = res;
          this.formBuild();
          console.log(res);
        });
      }
    });
  }

  private getData() {
    this.categoryService.getAllUsingGET4().subscribe(category => {
      this.categoryList = category.content;
      this.formBuild();
    });
    this.itemService.getAllUsingGET3().subscribe((items: PageItemDto) => this.items = items.content);
  }
  public isEdit(): boolean {
    return this.edit;
  }
  private formBuild() {
    this.productForm = this.formBuilder.group({
      id: [this.product.id],
      name: [this.product.name, Validators.compose([
        RxwebValidators.required()
      ])],
      price: [this.product.price, Validators.compose([
        RxwebValidators.required()
      ])],
      cost: [this.product.cost, Validators.compose([
        RxwebValidators.required()
      ])],
      control: [this.product.control ? this.product.control : 'Não', Validators.compose([
        RxwebValidators.required()
      ])],
      quantity: [this.product.quantity, Validators.compose([
        RxwebValidators.required()
      ])],
      minQuantity: [this.product.minQuantity, Validators.compose([
        RxwebValidators.required()
      ])],
      productCategoryDto: [this.product.productCategoryDto, Validators.compose([
        RxwebValidators.required()
      ])],
    });
  }
  private setProduct() {
    this.product.id = null;
    this.product.name = this.productForm.value.name;
    this.product.price = this.productForm.value.price;
    this.product.cost = this.productForm.value.cost;
    this.product.control = this.productForm.value.control;
    this.product.quantity = this.productForm.value.quantity;
    this.product.minQuantity = this.productForm.value.minQuantity;
    this.product.minQuantity = this.productForm.value.minQuantity;
    this.product.productCategoryDto = this.productForm.value.productCategoryDto;
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.productForm.get(controlName).hasError(errorName);
  }
  public save() {
    this.setProduct();
    console.log(this.product);
    // this.productService.createUsingPOST5(this.product)
    //   .subscribe(() => {
    //       this.router.navigate(['/product/list']);
    //       this.mensageSnack.open('Produto cadastrado com sucesso!', null, {
    //         duration: 3000
    //       });
    //       this.productForm.reset();
    //     }, err => {
    //       this.mensageSnack.open(err.error.message, null, {
    //         duration: 3000
    //       });
    //     }
    //   );
  }

  public update() {
    this.setProductToSave();

    if (this.productForm.valid) {
      this.productService.updateUsingPUT5(this.product).subscribe(res => {
        this.product = res;
        this.router.navigate(['/product/list']);
        this.mensageSnack.open('Produto Atualizado Com Sucesso!', null, {
          duration: 3000
        });
      }, err => {
        this.mensageSnack.open(err.error.message, null, {
          duration: 3000
        });
      });
    } else {
      this.launchInvalidFormMessage();
    }
  }
  private launchInvalidFormMessage() {
    this.mensageSnack.open('Formulário inválido', null, {
      duration: 3000
    });
  }
  private setProductToSave() {
    this.product.name = this.productForm.get('name').value;
    this.product.price = this.productForm.get('price').value;
    this.product.cost = this.productForm.get('cost').value;
    this.product.control = this.productForm.get('control').value;
    this.product.quantity = this.productForm.get('quantity').value;
    this.product.minQuantity = this.productForm.get('minQuantity').value;
    this.product.productCategoryDto.id = this.productForm.get('productCategoryDto').value.id;
  }

  compareCategory(pc1: ProductCategoryDto, pc2: ProductCategoryDto): boolean {
    return pc1 && pc2 ? pc1.id === pc2.id : pc1 === pc2;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
