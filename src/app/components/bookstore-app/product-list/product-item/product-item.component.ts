import { Component, OnInit,Input } from '@angular/core';
import { Poke } from '../model/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() 
  pokemon: Poke;

  constructor() { }

  ngOnInit(): void {
  }

}
