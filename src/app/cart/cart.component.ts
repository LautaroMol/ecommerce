import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./ui/cart-item.component";
import { CartStateService } from '../products/data-access/cart-state.service';
import { ProductItemCart } from '../interfaces/product';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, CurrencyPipe,CommonModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1
    });
  };
  onDecrease(product: ProductItemCart) {
    if (product.quantity > 1) {
      this.state.update({
        product: product.product,
        quantity: product.quantity - 1
      });
    } else {
      this.onRemove(product.product.id);
    }
  };
  trackByProductId(index: number, cartItem: ProductItemCart): number {
    return cartItem.product.id;
  }
}

