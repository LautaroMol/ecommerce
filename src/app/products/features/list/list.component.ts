import { Component,inject } from '@angular/core';
import { ProductStateServiceService } from '../../data-access/product-state-service.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { CartStateService } from '../../data-access/cart-state.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-list',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './list.component.html',
  styles: ``,
  providers: [ProductStateServiceService]
})
export default class ListComponent {

  productsState = inject(ProductStateServiceService);
  cartState = inject(CartStateService).state;

  changePage(){
    const page = this.productsState.state.page() +1;
    this.productsState.changePages$.next(page);
  }

  addToCart(product: Product): void {
    this.cartState.add({product, quantity: 1});
  }
}
