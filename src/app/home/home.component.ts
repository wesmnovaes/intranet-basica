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

avisos = [{titulo: 'Autorização: Mudança na Amil', autor: 'Maria Abadia', autor_avatar: 'avatar_profile_w.png'},
           {titulo: 'Vestimenta Interna', autor: 'Ana Clara', autor_avatar: 'avatar_profile_w.png'},
           {titulo: 'Manual recepção', autor: 'Marina', autor_avatar: 'avatar_profile_w.png'},
]

artigos = [{titulo: 'Agendando Exames de Ultrassom', autor: 'Wesley', autor_avatar: 'folder_yellow_icon.png'},
           {titulo: 'Trocando cilíndro Impressora Brother', autor: 'Ana Clara', autor_avatar: 'folder_yellow_icon.png'},
           {titulo: 'Autorização Orizon', autor: 'Marina', autor_avatar: 'folder_yellow_icon.png'},
]

autor_avatar: string = '../../assets/avatar_profile_w.png';

  constructor() { }

    

  ngOnInit(): void {

  }

}
