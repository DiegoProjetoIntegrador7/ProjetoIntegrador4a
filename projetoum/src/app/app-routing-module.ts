import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno-module').then(m => m.AlunoModule)
  },
  {
    path: 'listaexercicio1',
    loadChildren: () => import('./listaexercicio1/listaexercicio1-module').then(m => m.Listaexercicio1Module)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
