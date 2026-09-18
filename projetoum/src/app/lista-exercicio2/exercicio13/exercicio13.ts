import { Component } from '@angular/core';

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-exercicio13',
  standalone: false,
  templateUrl: './exercicio13.html',
  styleUrl: './exercicio13.css'
})
export class Exercicio13 {

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar', responsavel: 'Diego', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Trabalho', responsavel: 'João', prioridade: 'média', concluida: true },
    { id: 3, titulo: 'Exercícios', responsavel: 'Maria', prioridade: 'baixa', concluida: false },
    { id: 4, titulo: 'Projeto', responsavel: 'Pedro', prioridade: 'alta', concluida: true },
    { id: 5, titulo: 'Pesquisa', responsavel: 'Ana', prioridade: 'média', concluida: false },
    { id: 6, titulo: 'Revisão', responsavel: 'Lucas', prioridade: 'baixa', concluida: false }
  ];

  alterar(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

}