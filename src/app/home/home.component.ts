import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [{titulo: 'Hey! Sou um título', foto: 'Essa é minha foto', conteudo: 'Eu sou o conteúdo dessa circular e estou pasando aqui para avisar que todos os funcionários receberão um aumento de 15% no salário e que mês que veem todos os funcionários poderão retirar um picolé diretamente do freezer da cantina! não perca sua chance de ganhar free diabetes!', data_criacao: '16/03/2022 16:42', autor: 'Maria Abadia'},
          {titulo: 'Os avisos continuam', foto: 'Essa é minha foto', conteudo: 'Eu sou o conteúdo dessa circular e estou pasando aqui para avisar que todos os funcionários receberão um aumento de 15% no salário e que mês que veem todos os funcionários poderão retirar um picolé diretamente do freezer da cantina! não perca sua chance de ganhar free diabetes!', data_criacao: '16/03/2022 16:42', autor: 'Maria Abadia'},
          {titulo: 'Os avisos continuam', foto: 'Essa é minha foto', conteudo: 'Eu sou o conteúdo dessa circular e estou pasando aqui para avisar que todos os funcionários receberão um aumento de 15% no salário e que mês que veem todos os funcionários poderão retirar um picolé diretamente do freezer da cantina! não perca sua chance de ganhar free diabetes!', data_criacao: '16/03/2022 16:42', autor: 'Maria Abadia'}
]
  
  constructor() { }

    

  ngOnInit(): void {

  }

}
