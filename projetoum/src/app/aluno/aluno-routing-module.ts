import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastroaluno } from './cadastroaluno/cadastroaluno';
import { Listagem } from './listagem/listagem';

const routes: Routes = [
  {path: 'cadastro', component: Cadastroaluno},
    {path: 'listagem', component: Listagem}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
