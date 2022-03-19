import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rede',
  templateUrl: './rede.component.html',
  styleUrls: ['./rede.component.css']
})
export class RedeComponent implements OnInit {

  DadosTabela = [ {ssid: "HMCRD", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022",obs: 'Isto é um comentário que quebrará o tamanho da tabela'},
                  {ssid: "HMC", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022", obs: 'Isto é um comentário que quebrará o tamanho da tabela'},
                  {ssid: "HMCR_2G TI", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022", obs: 'Isto é um comentário que quebrará o tamanho da tabela'},
                  {ssid: "FATURAMENTO", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022", obs: 'Isto é um comentário que quebrará o tamanho da tabela'},
                  {ssid: "PACIENTE", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022", obs: 'Isto é um comentário que quebrará o tamanho da tabela'}
                  
                ];

  constructor() { }

  ngOnInit(): void {
  }

}
