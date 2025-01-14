import { Component,inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styles: ``,
  providers: [ProductsService]
})
export default class ListComponent {


  constructor() {

  }
}
