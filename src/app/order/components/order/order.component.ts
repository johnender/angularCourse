import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { map } from 'rxjs/operators';

import { Item } from './../../../core/models/item.model';
import { CartService } from './../../../core/services/cart.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<Item[]>;
  constructor(
    private cartService: CartService
  ) { 
    this.products$ = this.cartService.cart$
    .pipe(
      map((products) => {
        const uniqueProducts = products.filter(
          (product, index, array) =>
            index === array.findIndex((p) => p.id === product.id)
        );
        const productsWithQuantities = uniqueProducts.map((uniqueProduct) => {
          const timesRepeated = products.filter(
            (item) => item.id === uniqueProduct.id
          ).length;
          return { ...uniqueProduct, quantity: timesRepeated };
        });
        return productsWithQuantities;
      })
    );
   }

  ngOnInit(): void {
  }

}
