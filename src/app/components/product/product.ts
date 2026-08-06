import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../../models/productResponseModel';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  products: Product[] = [];
  apiUrl = "http://localhost:5147/api/products/getall";

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response) => {
      this.products = response.data;
    });

  }
}
