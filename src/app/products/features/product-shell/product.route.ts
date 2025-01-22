import { Routes } from "@angular/router";

export default [
  {path: 'products', loadComponent: () => import('../list/list.component'),
  },{
    path: 'product/:id',
    loadComponent: () => import('../product-detail/product-detail.component'),
  }
] as Routes;
