import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {FerramentasComponent} from './ferramentas/ferramentas.component';
import {EleicaoComponent} from './eleicao/eleicao.component';
import { PedidosDetalheComponent } from 'src/app/pedidos-detalhe/pedidos-detalhe.component';
import { MDPedidosComponent } from 'src/app/mdpedidos/mdpedidos.component';
import { CursosComponent } from 'src/app/cursos/cursos.component';
import { CursoDetalheComponent } from 'src/app/curso-detalhe/curso-detalhe.component';



const routes: Routes = [
  {path: 'ferramenta', component: FerramentasComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'eleicao', component: EleicaoComponent},
  {path: 'pedido', component: MDPedidosComponent},
  {path: 'pedido/:id', component: PedidosDetalheComponent},
  {path: 'cursos/:id', component: CursoDetalheComponent},
  {path: '', redirectTo: '/pedido', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
