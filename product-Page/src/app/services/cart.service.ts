import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);

  // Public read-only stream any component can subscribe to
  cartItems$: Observable<CartItem[]> = this.cartItems.asObservable();

  get totalItems(): number {
    return this.cartItems.value.reduce((sum, i) => sum + i.quantity, 0);
  }

  get totalPrice(): number {
    return this.cartItems.value.reduce(
      (sum, i) => sum + i.product.price * i.quantity, 0
    );
  }

  addItem(product: Product): void {
    const current = this.cartItems.value;
    const existing = current.find(i => i.product.id === product.id);
    if (existing) {
      this.cartItems.next(
        current.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      this.cartItems.next([...current, { product, quantity: 1 }]);
    }
  }

  removeItem(productId: number): void {
    this.cartItems.next(
      this.cartItems.value.filter(i => i.product.id !== productId)
    );
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
}
