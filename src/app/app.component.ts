import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PokeService } from './components/bookstore-app/product-list/product-list.component.service';
import { Poke } from './components/bookstore-app/product-list/model/poke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DesafioEcommerceAngular';
  pokemon: Observable<Poke> = [];

  constructor(private pokeService: PokeService){

  }

  getPoke(){
    this.pokeService.getPoke().subscribe(pokemon => {
      this.pokemon = pokemon;
    })
  }

}
