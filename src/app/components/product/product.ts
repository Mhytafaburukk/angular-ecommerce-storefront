import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product';
import { ListResponseModel } from '../../models/listResponseModel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"]);
      } else {
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }
}
