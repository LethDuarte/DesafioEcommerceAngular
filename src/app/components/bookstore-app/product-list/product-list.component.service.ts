import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable()

export class PokeService{
    public pokemons: Observable<any>=[];
    private url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

    /*httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }*/

   constructor(private http:HttpClient) {}

    getPoke(){
        this.pokemons = this.http.get(url);
    }

}
