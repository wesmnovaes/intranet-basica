import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-rede',
  templateUrl: './crud-rede.component.html',
  styleUrls: ['./crud-rede.component.css']
})
export class CrudRedeComponent implements OnInit {

  formdata;
  
  constructor() { }

  ngOnInit(): void {

    this.formdata = new FormGroup({
      ssid: new FormControl(),
      end: new FormControl(),
      pwd: new FormControl(),
      login: new FormControl(),
      adm_pwd: new FormControl(),
      obs: new FormControl()
    })
  }
  
  onClickSubmit(data){
  //servico aqui
  }
}
