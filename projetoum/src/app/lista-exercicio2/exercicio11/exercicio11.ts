import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  templateUrl: './exercicio11.html',
  styleUrl: './exercicio11.css'
})
export class Exercicio11 {

  somenteDisponiveis = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 50, quantidade: 5 },
    { id: 2, nome: 'Teclado', preco: 100, quantidade: 0 },
    { id: 3, nome: 'Monitor', preco: 800, quantidade: 2 },
    { id: 4, nome: 'Headset', preco: 150, quantidade: 0 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 6 }
  ];

}