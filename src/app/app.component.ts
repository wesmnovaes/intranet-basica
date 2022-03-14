import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = 'Seja bem-vindo ao servidor simpro!';
  title = 'Servidor Simpro - HMCR';
  

  ngOnInit(): void {
    console.log('passei aqui')

  }




}
