import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regra3',
  templateUrl: './regra3.component.html',
  styleUrls: ['./regra3.component.css']
})
export class Regra3Component implements OnInit {
 valor1: number | undefined;
 valor2: number | undefined;
 valorTotal: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }
CalcularRegra3(){
  return this.valorTotal = Number(this.valor1) + Number(this.valor2)
  console.log(this.valorTotal)

}
  
}
