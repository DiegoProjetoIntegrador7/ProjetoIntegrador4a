import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-exercicio8',
  standalone: false,
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.css',
})
export class Exercicio8 {
  produtos: Produto[] = [
    { id: 1, nome: 'Mouse', preco: 50, quantidade: 5 },
    { id: 2, nome: 'Teclado', preco: 100, quantidade: 3 },
    { id: 3, nome: 'Monitor', preco: 800, quantidade: 2 },
    { id: 4, nome: 'Headset', preco: 150, quantidade: 4 },
    { id: 5, nome: 'Webcam', preco: 200, quantidade: 2 }
  ];
}
