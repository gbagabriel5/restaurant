import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from './item/item-list/item-list.component';
import {ItemRegisterComponent} from './item/item-register/item-register.component';
import {ClientRegisterComponent} from './client/client-register/client-register.component';
import {ClientsListComponent} from './client/clients-list/clients-list.component';
import {ProductRegisterUpdateComponent} from './product/product-register-update/product-register-update.component';
import {ProductListComponent} from './product/product-list/product-list.component';
const routes: Routes = [
  { path: 'item/list', component: ItemListComponent},
  { path: 'item/register', component: ItemRegisterComponent},
  { path: 'item/update/:id', component: ItemRegisterComponent},
  { path: 'client/update/:id', component: ClientRegisterComponent},
  { path: 'client/register', component: ClientRegisterComponent},
  { path: 'client/list', component: ClientsListComponent},
  { path: 'product/list', component: ProductListComponent},
  { path: 'product/register', component: ProductRegisterUpdateComponent},
  { path: 'product/update/:id', component: ProductRegisterUpdateComponent},
  { path: '**', component: ProductListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
