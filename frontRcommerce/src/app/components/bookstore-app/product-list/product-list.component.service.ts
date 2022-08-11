import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { book } from "./model/book";

@Injectable()

export class BooksService {
    private url = 'https://api.steinhq.com/v1/storages/62f58b79bca21f053ea7fcf6';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
}