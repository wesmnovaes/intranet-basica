import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 cards = [{titulo: 'Hey! Sou um título', foto: 'Essa é minha foto', conteudo: 'Eu sou o conteúdo dessa circular e estou pasando aqui para avisar que todos os funcionários receberão um aumento de 15% no salário e que mês que veem todos os funcionários poderão retirar um picolé diretamente do freezer da cantina! não perca sua chance de ganhar free diabetes!'},
          {titulo: 'Hey! Sou o segundo título', foto: 'Essa é minha foto', conteudo: 'Eu sou o conteúdo dessa circular e estou pasando aqui para avisar que todos os funcionários receberão um aumento de 15% no salário e que mês que veem todos os funcionários poderão retirar um picolé diretamente do freezer da cantina! não perca sua chance de ganhar free diabetes!'},
]
  constructor() { 


  }

  ngOnInit(): void {
   
  }

}
