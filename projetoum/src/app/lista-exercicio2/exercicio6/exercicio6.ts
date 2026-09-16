import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.css',
})
export class Exercicio6 {
  nomes = ['Diego', 'Bruno', 'Carlos', 'Davi', 'Miguel'];

  removerUltimo() {
    this.nomes.length = this.nomes.length - 1;
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = ['Diego', 'Bruno', 'Carlos', 'Davi', 'Miguel'];
  }
}
