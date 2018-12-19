import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import {PRODUTOS, PAGAMENTOS, Pedido } from '../shared/model/pedido';
import { CAValidators } from '../shared/validators';
import { PedidosService } from '../shared/services/pedidos.service';

@Component({
  selector: 'app-mdpedidos',
  templateUrl: './mdpedidos.component.html',
  styleUrls: ['./mdpedidos.component.css']
})
export class MDPedidosComponent implements OnInit {

  form: FormGroup;

  pedidos: Pedido[];

  constructor(public pedidoService: PedidosService , private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  get produtos() {
    return PRODUTOS;
  }

  get formaPagamentos() {
    return PAGAMENTOS;
  }

  buildForm() {
    this.form = this.fb.group ({
      idxProduto: [null, Validators.required],
      idxForma: [null, Validators.required],
      quantidade: [null, [Validators.required, CAValidators.validarMinMaxCodigoFactory(0, 50) ]]
    });

    this.pedidoService.listar().
    subscribe(value => {
      this.pedidos = value;
    },
      error => {
        alert ('Erro de Comunicação com o Servidor:' + error['message']);
      }
    );
  }

  get listarPedidos(): Pedido [] {
    return this.pedidos;
  }

  incluir() {
    const pedidoTela = new Pedido (0,
                                    +this.form.value.idxProduto,
                                    +this.form.value.idxForma,
                                    +this.form.value.quantidade);

    this.pedidoService.
    incluir(pedidoTela).subscribe(value => {
        if (value.status === 200) {
          console.log ('Incluído com sucesso...');
          this.buildForm();
        } else {
          console.log ('Erro!! ' + value.status);
        }
    },
    error => {
      alert('Erro do servidor durante a consulta de cursos!');
    });

  }

  onExcluir (id: number) {
    console.log ('Id impresso: ' + id);

    this.pedidoService.excluir(id).subscribe(value => {
          if (value.status === 200) {
            this.pedidos = this.pedidos.filter (e => e.id !== id);
          } else {
            console.log ('Erro!! ' + value.status);
          }
      },
      error => {
        alert('Erro do servidor durante a consulta de pedidos!');
    });
  }

  public totalGeral(): number {

     let totalizador = 0;

     for (const ped of this.listarPedidos) {
       totalizador += ped.total;
     }

     return totalizador;
   }
}
