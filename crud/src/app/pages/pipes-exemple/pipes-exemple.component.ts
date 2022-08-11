import { DATE_PIPE_DEFAULT_TIMEZONE, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemple',
  templateUrl: './pipes-exemple.component.html',
  styleUrls: ['./pipes-exemple.component.css']
})
export class PipesExempleComponent implements OnInit {
  number = 0;
  text = 'Olá Mundo!';
  date = new Date();
  pessoa = {
    nome:'Ivonaldo',
    idade: '26',
    profissao: 'Instrutor'
    
  };
  nomes = ['Ivonaldo', 'Ana', 'Maria']

  constructor( private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
  }

  mudaValor(){
    this.number = 123456789;
  }

  add(text: string){
    this.nomes.push(text);
  }

}
