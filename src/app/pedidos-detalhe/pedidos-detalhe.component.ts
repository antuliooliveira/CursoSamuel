import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidosService } from 'src/app/shared/services/pedidos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pedidos-detalhe',
  templateUrl: './pedidos-detalhe.component.html',
  styleUrls: ['./pedidos-detalhe.component.css']
})
export class PedidosDetalheComponent implements OnInit {

  // @Input() idPedido: string;
  id: string;
  inscricao: Subscription;

  pedido: Pedido;

  constructor(private pedidosService:PedidosService,
                private route: ActivatedRoute,
                private router: Router ) { }

  // ngOnInit() {
  //   this.pedido = this.pedidosService.consultar (this.idPedido);
  // }

  ngOnInit() {
    console.log ('invocado ngOnInit de pedidos detalhe');
    this.inscricao = this.route.params.subscribe(params => {
                                                    this.id = params['id'];

                                                    this.pedidosService.consultar(this.id).
                                                    subscribe(value => {
                                                      this.pedido = value;
                                                    },
                                                      error => {
                                                        alert ('Erro de Comunicação com o Servidor:' + error['message']);
                                                      }
                                                    );



                                                    if (this.pedido === null) {
                                                      this.router.navigate(['/naoEncontrado']);
                                                    }
                                                  });
  }

}
