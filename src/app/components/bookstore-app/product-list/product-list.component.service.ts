import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Book } from "./model/book";

@Injectable()

export class BooksService{
    private url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient) {}

    getBook(){
        return this.http.get(this.url);
    }

}
