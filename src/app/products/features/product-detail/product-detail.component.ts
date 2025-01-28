import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';

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

  constructor(){
    effect(()=>{
      console.log(this.id);
      this.productDetailState.getById(this.id());
    })
  }

}
