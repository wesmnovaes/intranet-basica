import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  users = [{nome: "Wesley", id: 1},
  {nome: "Maria", id: 2},
  {nome: "João", id: 3},
  {nome: "Ana", id: 4},
  {nome: "José", id: 5},
]
  form_user
  teste = "teste de nome";
  constructor() { }

  ngOnInit(): void {

    this.form_user = new FormGroup({
      nome: new FormControl(),
      senha: new FormControl(),
      nova_senha: new FormControl,
      nova_senha_confirm: new FormControl()
    })

  }

  onClickSubmit(data){}

}
