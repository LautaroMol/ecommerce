import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../../interfaces/product';
import {signalSlice} from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { map } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class ProductStateServiceService {

  private productsService = inject(ProductsService);
  private initialState: State = {
    products:[],
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources:[
      this.productsService
      .getProducts().pipe(map((products) => ({products, status: 'success' as const }))),
    ],
  });

}
