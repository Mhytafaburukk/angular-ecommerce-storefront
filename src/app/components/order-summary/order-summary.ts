import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary implements OnInit {
  cartItems: CartItem[];
  constructor() { }

  ngOnInit(): void {

  }
}
