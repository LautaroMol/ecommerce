import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./ui/cart-item.component";
import { CartStateService } from '../products/data-access/cart-state.service';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }
}

//44.50
