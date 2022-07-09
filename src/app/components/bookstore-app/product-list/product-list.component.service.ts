import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Poke } from "./model/poke";


@Injectable()

export class PokeService{
    public pokemons: Observable<any>=[];
    private url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

    /*httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }*/

   constructor(private http:HttpClient) {}

    getPoke(): Observable<Poke>{
        this.pokemons = this.http.get(url);
    }

}

ngOnIninit(){
    getPoke();
}
