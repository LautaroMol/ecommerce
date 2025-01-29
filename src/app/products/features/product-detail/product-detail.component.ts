import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CartStateService } from '../../data-access/cart-state.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent {

  productDetailState = inject(ProductDetailStateService).state;
  id = input.required<string>();
  cartState = inject(CartStateService).state;

  constructor(){
    effect(()=>{
      console.log(this.id);
      this.productDetailState.getById(this.id());
    })
  }

  addToCart(product: Product): void {
    this.cartState.add({product: this.productDetailState.product(), quantity: 1});
  }
}
