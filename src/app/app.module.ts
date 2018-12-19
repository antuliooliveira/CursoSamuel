import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CelsiusComponent } from './celsius/celsius.component';
import { EleicaoComponent } from './eleicao/eleicao.component';
import { BancoComponent } from './banco/banco.component';
import { CelsiusTwoComponent } from './celsius-two/celsius-two.component';
import { EleicaoTwoComponent } from './eleicao-two/eleicao-two.component';
import { NcursoComponent } from './ncurso/ncurso.component';
import { TesteCursoComponent } from './teste-curso/teste-curso.component';
import { ContadorComponent } from './contador/contador.component';
import { TesteContadorComponent } from './teste-contador/teste-contador.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TDFormComponent } from './tdform/tdform.component';
import { TDPedidosComponent } from './tdpedidos/tdpedidos.component';
import { MDFormComponent } from './mdform/mdform.component';
import { MDPedidosComponent } from './mdpedidos/mdpedidos.component';
import { CursosComponent } from './cursos/cursos.component';
import { PedidosDetalheComponent } from './pedidos-detalhe/pedidos-detalhe.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    CelsiusComponent,
    EleicaoComponent,
    BancoComponent,
    CelsiusTwoComponent,
    EleicaoTwoComponent,
    NcursoComponent,
    TesteCursoComponent,
    ContadorComponent,
    TesteContadorComponent,
    CalculadoraComponent,
    FerramentasComponent,
    LoginComponent,
    MainComponent,
    PedidosComponent,
    TDFormComponent,
    TDPedidosComponent,
    MDFormComponent,
    MDPedidosComponent,
    CursosComponent,
    PedidosDetalheComponent,
    CursoDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
