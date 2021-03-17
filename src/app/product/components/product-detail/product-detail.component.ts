import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(res => {
      this.product = res;
    });
  }

  createProduct(){
		const newProduct: Product = {
			id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
		}

		this.productsService.createProduct(newProduct).subscribe(res => {
			console.log(res);
    });
  }

	updateProduct(){
		const newProduct: Partial<Product> = {
      price: 200,
      description: 'blla'
		}

		this.productsService.updateProduct('6', newProduct).subscribe(res => {
			console.log(res);
    });
  }

	deleteProduct(){

		this.productsService.deleteProduct('222').subscribe(res => {
			console.log(res);
    });
  }
}
