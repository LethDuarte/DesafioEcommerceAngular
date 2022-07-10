import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/bookstore-app/services/book-service.service';
import { Book } from './model/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  books: Array<Book> = [];

  constructor(private bookService: BookServiceService) {}

  ngOnInit(): void {
    this.getBook();
  }

  getBook(){
    this.bookService.getBook().subscribe(livro => {
        this.books = livro;
    })
   }

}
