import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio14',
  standalone: false,
  templateUrl: './exercicio14.html',
  styleUrl: './exercicio14.css',
})
export class Exercicio14 {

  exibir: boolean = false;

  usuarioLogado: boolean = false;

  nomes = ['Diego', 'Bruno', 'Carlos', 'Davi', 'Miguel'];

  alternarMensagem() {
    this.exibir = !this.exibir;
  }

  alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }

}