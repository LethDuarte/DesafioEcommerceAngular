import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Book } from "./model/book";

@Injectable()

export class BooksService{
    private url = 'https://sheet.best/api/sheets/d0d4a9c4-4983-4209-8a02-066127d46be3';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient) {}

    getBook(){
        return this.http.get(this.url);
    }

}
