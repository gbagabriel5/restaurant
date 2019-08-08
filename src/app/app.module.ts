import { ApiModule } from './../api/api.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';
import {ClientsListComponent} from './client/clients-list/clients-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ClientRegisterComponent} from './client/client-register/client-register.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemRegisterComponent } from './item/item-register/item-register.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    ClientRegisterComponent,
    ItemListComponent,
    ItemRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    ApiModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
