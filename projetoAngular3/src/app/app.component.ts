import { compileFactoryFunction } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppThiago';
  
  count = 0;
  nome = "Thiago Teixeira Barbosa";
  text = '';

  pessoas = [
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"

    },
    {
      nome: "Maria",
      sobrenome: "Silva"
    },
    {
      nome: "Marcio",
      sobrenome: "Santos"
    },
    {
      nome: "Joao",
      sobrenome: "Santana"
    }
  ];

  constructor(){

  };

  ngOnInit(): void {
    console.log(this.pessoas);
      let interval =  setInterval(()=> {
        this.count++;
        if(this.count ===10){
          clearInterval(interval)
        }
      }, 1000)
  };
};