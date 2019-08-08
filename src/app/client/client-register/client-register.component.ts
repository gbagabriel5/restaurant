import { Component, OnInit } from '@angular/core';
import {ClientControllerService, ClientDto} from '../../../api';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {
  public client: ClientDto = new class implements ClientDto {
    adress: string;
    cpf: string;
    fone: string;
    id: number;
    name: string;
    rg: string;
  };
  public formClient: FormGroup;

  constructor(private clientController: ClientControllerService, private formBuilder: FormBuilder) { }

  formBuild() {
    this.formClient = this.formBuilder.group({
      name: new FormControl(this.client.name),
      rg: new FormControl(this.client.rg),
      cpf: new FormControl(this.client.cpf),
      address: new FormControl(this.client.adress),
      fone: new FormControl(this.client.fone)
    });
  }

  save() {
    this.setClient();
    console.log(this.client);
    this.clientController.createUsingPOST1(this.client).subscribe(e => console.log(e));
  }

  setClient() {
    this.client.id = null;
    this.client.name = this.formClient.get('name').value;
    this.client.rg = this.formClient.get('rg').value;
    this.client.cpf = this.formClient.get('cpf').value;
    this.client.adress = this.formClient.get('address').value;
    this.client.fone = this.formClient.get('fone').value;
  }

  ngOnInit() {
    this.formBuild();
  }

}
