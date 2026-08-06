import { Component } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  products:Product[] = [];
  constructor() { }
  ngOnInit(): void {

  }
}
