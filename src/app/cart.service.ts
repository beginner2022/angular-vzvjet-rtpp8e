import { Injectable } from '@angular/core';
import { Product } from './products';
/* . . . */
export class CartService {
  items: Product[] = [];
/* . . . */

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
/* . . . */
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
}
