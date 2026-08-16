import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { HttpClient } from '@angular/common/http'
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) { }
  addToCart(product: Product) {
    let item = CartItems.find(c => c.product.id == product.id)
    if (item) {
      item.quantity += 1
    } else {
      let newItem = new CartItem()
      newItem.product = product;
      newItem.quantity = 1;
      CartItems.push(newItem)
    }
  }
  removeFromCart(product: Product) {
    let item = CartItems.find(c => c.product.id == product.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }
  list(): CartItem[] {
    return CartItems;
  }
}
