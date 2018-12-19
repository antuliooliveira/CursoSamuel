import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

import {PRODUTOS, PAGAMENTOS, Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) {}

  getBaseUrl(): string {
    return 'http://localhost:3000/api/pedidos';
  }

  incluir (pedido: Pedido) {
    // this.pedidos.push (pedido);
    return this.http.post (this.getBaseUrl(), pedido, {observe: 'response', responseType: 'text'});
  }

  excluir(id: number): Observable<HttpResponse<string>> {
    console.log ('Execução para exclusão... ' + id);
    return this.http.delete (this.getBaseUrl() + '/' + id, {observe: 'response', responseType: 'text'});
  }

  listar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]> (this.getBaseUrl())
     .pipe(map(escolas => escolas.map(e => Object.assign(new Pedido(), e)))
    );
  }

  consultar(indice: string): Observable<Pedido> {
    return this.http.get<Pedido> (this.getBaseUrl() + '/' + indice)
    .pipe(map(e => Object.assign(new Pedido(), e))
   );
  }

}
