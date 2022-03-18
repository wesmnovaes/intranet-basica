import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rede',
  templateUrl: './rede.component.html',
  styleUrls: ['./rede.component.css']
})
export class RedeComponent implements OnInit {

  DadosTabela = [ {ssid: "HMCRD", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022"},
                  {ssid: "HMC", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022"},
                  {ssid: "HMCR_2G TI", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022"},
                  {ssid: "FATURAMENTO", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022"},
                  {ssid: "PACIENTE", end: "192.168.1.1", login: "admin", senha: 'hmcrSENHA2022',  senha_adm: "hmcrSENHA2022"}
                  
                ];

  constructor() { }

  ngOnInit(): void {
  }

}
