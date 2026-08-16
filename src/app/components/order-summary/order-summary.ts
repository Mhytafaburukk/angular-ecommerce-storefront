import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart';
import { Product } from '../../models/Product';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary implements OnInit {
  cartItems: CartItem[];
  constructor(private cartService: CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCard();
  }
  getCard() {
    this.cartItems = this.cartService.list();
  }
  remove(product: Product) {
    this.cartService.removeFromCart(product);
    this.toastrService.success("Ürün sepetten silindi", product.name);
  }
}
