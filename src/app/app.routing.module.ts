import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemListComponent} from './item/item-list/item-list.component';
import {ItemRegisterComponent} from './item/item-register/item-register.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
const routes: Routes = [
  { path: 'item/list', component: ItemListComponent},
  { path: 'item/register', component: ItemRegisterComponent},
  { path: 'item/update/:id', component: ItemRegisterComponent},
  { path: '**', component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
