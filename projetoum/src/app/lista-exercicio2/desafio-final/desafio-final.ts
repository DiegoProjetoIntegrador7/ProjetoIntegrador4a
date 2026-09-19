import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota: number | null;
  status: string;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.css'
})
export class DesafioFinal {

  mostrarConcluidos = true;

  projetos: Projeto[] = [
  { id: 1, titulo: 'Sistema Escolar', equipe: 'Equipe A', nota: 8, status: 'concluído', entregue: true },
  { id: 2, titulo: 'Aplicativo de Saúde', equipe: 'Equipe B', nota: 7, status: 'testes', entregue: false },
  { id: 3, titulo: 'Site da Empresa', equipe: 'Equipe C', nota: 5, status: 'desenvolvimento', entregue: false },
  { id: 4, titulo: 'Sistema de Vendas', equipe: 'Equipe D', nota: null, status: 'planejamento', entregue: false }
];

  alterarStatus(projeto: Projeto) {

    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';
    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';
    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';
    } else {
      projeto.status = 'planejamento';
    }

  }

  quantidadeConcluidos() {
    return this.projetos.filter(projeto => projeto.status === 'concluído').length;
  }

}