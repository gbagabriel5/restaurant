import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from './item/item-list/item-list.component';
import {ItemRegisterComponent} from './item/item-register/item-register.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ClientRegisterComponent} from './client/client-register/client-register.component';
import {ClientsListComponent} from './client/clients-list/clients-list.component';
const routes: Routes = [
  { path: 'item/list', component: ItemListComponent},
  { path: 'item/register', component: ItemRegisterComponent},
  { path: 'item/update/:id', component: ItemRegisterComponent},
  { path: 'client/update/:id', component: ClientRegisterComponent},
  { path: 'client/register', component: ClientRegisterComponent},
  { path: 'client/list', component: ClientsListComponent},
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
