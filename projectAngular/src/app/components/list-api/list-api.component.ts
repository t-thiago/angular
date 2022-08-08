import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  titulos: Array<any> =[];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
   this.listService.getList().subscribe((result) => {
    this.titulos = result?.results;
    console.log(this.titulos);
   })
  }

}