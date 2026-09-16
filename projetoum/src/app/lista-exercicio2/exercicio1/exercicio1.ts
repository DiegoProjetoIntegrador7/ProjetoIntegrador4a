import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: false,
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.css',
})
export class Exercicio1 {
  exibir: boolean = false;

  alternarMensagem() {
    this.exibir = !this.exibir;
  }
}
