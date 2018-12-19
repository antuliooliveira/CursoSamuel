// Exercicio 10
import { Component, OnInit } from '@angular/core';

export const PRODUTOS = [{nome: 'Camisa', valor: 5.00},
                {nome: 'Short', valor: 10.00} ,
                {nome: 'Bermuda', valor: 15.00},
                {nome: 'Calça', valor: 20.00},
                {nome: 'Sapato', valor: 25.00}];

export const PAGAMENTOS = [{nome: 'Boleto', valor: 0.1, desconto: '10%'}, {nome: 'Cartao', valor: 0.05, desconto: '5%'}];


export class Pedido {

    // Usar a '?' torna o atributo opcional
    constructor (public id?: number,
                    public idxProduto?: number,
                    public idxForma?: number,
                    public quantidade?: number) {}

    get produtos() {
        return PRODUTOS;
    }

    get formaPagamentos() {
        return PAGAMENTOS;
    }

    get produto() {
        return PRODUTOS[this.idxProduto];
    }

    get formaPagamento() {
        return PAGAMENTOS[this.idxForma];
    }

    get valorFormatado(): string {
        const prodPedido = this.produtos[this.idxProduto];

        return prodPedido.valor.toFixed(2);
    }

    get total(): number {
        const prodPedido = this.produtos[this.idxProduto];
        const frmPagPedido = this.formaPagamentos[this.idxForma];

        const valorSemDesconto = this.quantidade * prodPedido.valor;
        const valorComDesconto = valorSemDesconto * (1 - frmPagPedido.valor );

        return valorComDesconto;
    }

    get totalFormatado(): string {

        return this.total.toFixed(2);
    }
}
