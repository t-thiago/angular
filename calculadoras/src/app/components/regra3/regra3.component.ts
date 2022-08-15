import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regra3',
  templateUrl: './regra3.component.html',
  styleUrls: ['./regra3.component.css']
})
export class Regra3Component implements OnInit {

valor1: | undefined;
valor2:number | undefined;
valor3:number | undefined;
resultado:number | undefined;
checar: boolean = false



  constructor() { }

  ngOnInit(): void {
  }

calcular(){
  if(this.checar==false){
    return this.resultado = Number(this.valor2) * Number(this.valor3) / Number(this.valor1)

  }else{
    return this.resultado = Number(this.valor1) * Number(this.valor2) / Number(this.valor3)
  }

}

limpar(){
  this.resultado = undefined;
}

 
}
