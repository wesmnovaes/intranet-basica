import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-senhas',
  templateUrl: './crud-senhas.component.html',
  styleUrls: ['./crud-senhas.component.css']
})
export class CrudSenhasComponent implements OnInit {

  formdata;
  
  constructor() { }

  ngOnInit(): void {
    
    this.formdata = new FormGroup({
      descr: new FormControl(),
      end: new FormControl(),
      login: new FormControl(),
      senha: new FormControl(),
      obs: new FormControl()
    })
  }

  onClickSubmit(data){
    //servico_aqui
  }

}
