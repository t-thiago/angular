import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regra3',
  templateUrl: './regra3.component.html',
  styleUrls: ['./regra3.component.css']
})
export class Regra3Component implements OnInit {
  valor1: any;
  valor2: any;
  valor3: any;
  resultado: any;

  constructor() { }

  ngOnInit(): void {
  }
CalcularRegra3(){
this.resultado = this.valor1 + this.valor3/this.valor1;

}
  
}
