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
  constructor() { }

  ngOnInit(): void {
  }

}
