import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartService } from '../../services/cart';



@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary implements OnInit {
  cartItems: CartItem[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCard();
  }
  getCard() {
    this.cartItems = this.cartService.list();
  }
}
