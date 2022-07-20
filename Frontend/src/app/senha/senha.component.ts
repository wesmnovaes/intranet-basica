import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  constructor() { }

  DadosTabela = [ {descr: "Amil", end: "www.amil.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "Saúde Caixa", end: "www.sc.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "FA", end: "www.fa.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "SulAmerica", end: "www.sa.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "Plansaúde", end: "servir.com", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "Cassi", end: "www.cassi.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "Geap", end: "www.geap.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                  {descr: "PróSocial", end: "www.ps.com.br", login: "recepcao", senha: 123456,  obs: "fatura"},
                ];


  ngOnInit(): void {

  }

  tb(): void{
//    this.teste = this.DadosTabela[0]
  }
}
