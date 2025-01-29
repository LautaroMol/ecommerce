import { Component, inject, input, output } from '@angular/core';
import { ProductItemCart } from '../../interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { CartStateService } from '../../products/data-access/cart-state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './cart-item.component.html',
  styles: ``
})
export class CartItemComponent {
  productCartItem = input.required<ProductItemCart>();

  state = inject(CartStateService).state;

  onRemove = output<number>();
  onIncrease = output<ProductItemCart>();
  onDecrease = output<ProductItemCart>();


}
