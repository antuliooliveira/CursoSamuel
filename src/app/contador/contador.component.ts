// Exercicio sobre Output Propertie

import { Component, OnInit, Output, Input , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Output() mudou = new EventEmitter();

  @Input() valor = 0;

  constructor() { }

  ngOnInit() {
  }

  decrementa(dados: any) {

    this.valor--;
    this.mudou.emit(
                    {novoValor: this.valor,
                       msg: 'diminuiu'
                    }
                    );
  }

  incrementa() {
    this.valor++;
    this.mudou.emit({novoValor: this.valor, msg: 'aumentou'});
  }

}
