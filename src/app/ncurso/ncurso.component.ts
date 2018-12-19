import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ncurso',
  templateUrl: './ncurso.component.html',
  styleUrls: ['./ncurso.component.css']
})
export class NcursoComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

}
