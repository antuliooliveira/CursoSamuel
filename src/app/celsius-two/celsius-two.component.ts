import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius-two',
  templateUrl: './celsius-two.component.html',
  styleUrls: ['./celsius-two.component.css']
})
export class CelsiusTwoComponent implements OnInit {

  farStr: string;
  farNumber: number;
  celsius: number;
  celsiusStr: string;
  valorInvalido: string = '';

  constructor() { }

  ngOnInit() {
  }

  converter(){
    this.valorInvalido = '';

    if (this.farStr) {
      this.farNumber = parseInt(this.farStr);
      this.celsius = (this.farNumber - 32)*5/9;
      this.celsiusStr = this.celsius.toFixed(2);
    } else {
      this.valorInvalido = 'Valor inválido!';
    }

  }

}
