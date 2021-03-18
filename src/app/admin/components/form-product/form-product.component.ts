import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MyValidators} from './../../../utils/validators'

import { ProductsService } from './../../../core/services/products/products.service'

import { AngularFireStorage } from '@angular/fire/storage'

import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;


  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage,
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(1000)]],
      title: ['', [Validators.required, Validators.maxLength(1000)]],
      price: [0, [Validators.required, Validators.maxLength(1000), MyValidators.isPriceValid]],
      image: ['', [Validators.maxLength(1000)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
    })
  }

  createProduct(event:Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      })
      
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const name = event.target.files[0].name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }
}
