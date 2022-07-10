import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/app/components/bookstore-app/product-list/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  getBook(): Observable<any> {
    let bookArray = [
      {
        titulo: 'O Misterioso Caso de Styles',
        ano: 1920,
        detetive: 'Hercule Poirot',
      },
      {
        titulo: 'O Adversário Secreto',
        ano: 1922,
        detetive: 'Tommy e Tuppence',
      },
      {
        titulo: 'Assassinato no Campo de Golfe',
        ano: 1923,
        detetive: 'Hercule Poirot',
      },
      {
        titulo: 'Poirot Investiga',
        ano: 1924,
        detetive: 'Hercule Poirot',
      },
      {
        titulo: 'O Homem do Terno Marrom',
        ano: 1924,
        detetive: 'Anne Beddingfeild',
      },
      {
        titulo: 'O Segredo de Chimneys',
        ano: 1925,
        detetive: 'Superintendente Battle',
      },
    ];

    return of(bookArray);

  }
}
