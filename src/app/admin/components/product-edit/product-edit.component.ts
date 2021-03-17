import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router , ActivatedRoute, Params} from '@angular/router';

import { MyValidators} from './../../../utils/validators'

import { ProductsService } from './../../../core/services/products/products.service'


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product =>{
        this.form.patchValue(product)
        //   {
        //   id: product.id,
        //   title: product.title,
        //   price: product.price,
        //   image: product.image,
        //   description: product.description,

        // })
      })
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(1000)]],
      price: [0, [Validators.required, Validators.maxLength(1000), MyValidators.isPriceValid]],
      image: ['', [Validators.maxLength(1000)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
    })
  }

  updateProduct(event:Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      })
      
    }
  }

}
