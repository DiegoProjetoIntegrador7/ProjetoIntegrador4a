import { Component } from '@angular/core';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio12',
  standalone: false,
  templateUrl: './exercicio12.html',
  styleUrl: './exercicio12.css'
})
export class Exercicio12 {

  nome = '';
  quantidade = 0;
  mensagem = '';

  produtos: Produto[] = [];

  cadastrar() {

    if (this.nome === '' || this.quantidade < 0) {
      this.mensagem = 'Não foi possível realizar o cadastro.';
      return;
    }

    this.produtos.push({
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluir(index: number) {
    this.produtos.splice(index, 1);
  }

}