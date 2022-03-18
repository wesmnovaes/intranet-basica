import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-rede',
  templateUrl: './crud-rede.component.html',
  styleUrls: ['./crud-rede.component.css']
})
export class CrudRedeComponent implements OnInit {

  formdata;

  ssid
      end
      pwd
      login
      adm_pwd
      obs
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
    
    this.ssid = data.ssid
      this.end = data.end
      this.pwd = data.pwd
      this.login = data.login
      this.adm_pwd = data.adm_pwd
      this.obs = data.obs
  }
}
