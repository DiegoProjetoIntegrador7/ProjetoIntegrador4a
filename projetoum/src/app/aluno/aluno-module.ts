import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing-module';
import { Cadastroaluno } from './cadastroaluno/cadastroaluno';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastroaluno, Listagem],
  imports: [CommonModule, AlunoRoutingModule],
})
export class AlunoModule {}
