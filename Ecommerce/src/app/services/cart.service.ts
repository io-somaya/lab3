import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<any[]>([]);

  constructor() {}

  
  getCartItems() {
    return this.cartItems.asObservable();
  }

 
  addItem(item: any) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find((i) => i.id === item.id);

    if (existingItem) {
     
      if (existingItem.quantity < item.stock) {
        existingItem.quantity += 1;
      }
    } else {
      
      currentItems.push({ ...item, quantity: 1 });
    }

    this.cartItems.next(currentItems);
  }

  removeItem(id: number) {
    
    const updatedItems = this.cartItems.value.filter((item) => item.id !== id);
    this.cartItems.next(updatedItems);
  }

  updateQuantity(id: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const item = currentItems.find((i) => i.id === id);
    //if item = 0 then thats add 
    if (item && quantity > 0 && quantity <= item.stock) {
      item.quantity = quantity;
      this.cartItems.next(currentItems);
    }
  }

  // Clear cart
  clearCart() {
    this.cartItems.next([]);
  }
}