import { inject, Injectable } from '@angular/core';
import { Product } from '../../interfaces/product';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import { catchError, map, of, startWith, Subject, switchMap } from 'rxjs';

interface State {
  products: Product[];
  status: 'loading' | 'success' | 'error';
  page: number;
}
@Injectable()
export class ProductStateServiceService {

  private productsService = inject(ProductsService);

  private initialState: State = {
    products: [],
    status: 'loading' as const,
    page: 1,
  };

  changePages$ = new Subject<number>();

  loadProducts$ = this.changePages$.pipe(
    startWith(1),
    switchMap((page) => this.productsService.getProducts(page)),
    map((products) => ({ products, status: 'success' as const })),
    catchError(() => {
      return of({
        products: [],
        status: 'error' as const,
      });
    }),
  );

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.changePages$.pipe(
        map((page) => ({ page, status: 'loading' as const }))
      ),
      this.loadProducts$,
    ],
  });
}
