import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.css'
})
export class Exercicio10 {

  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 50, quantidade: 5, promocao: true },
    { id: 2, nome: 'Teclado', preco: 100, quantidade: 3, promocao: false },
    { id: 3, nome: 'Monitor', preco: 800, quantidade: 2, promocao: true },
    { id: 4, nome: 'Headset', preco: 150, quantidade: 4, promocao: false },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 6, promocao: false }
  ];

  alterarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }

}