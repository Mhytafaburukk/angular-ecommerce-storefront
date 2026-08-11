import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = "http://localhost:5147/api/products/getall";
  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
