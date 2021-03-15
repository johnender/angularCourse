import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'platzi-store';
  names = [];
  name: string;
  products: Product[] = [
    {
      id: '1',
      image: './assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: './assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: './assets/images/mug.png',
      title: 'Mug',
      price: 8000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: './assets/images/pin.png',
      title: 'Pin',
      price: 800,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: './assets/images/stickers1.png',
      title: 'Stickers',
      price: 800,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: './assets/images/stickers2.png',
      title: 'Stickers',
      price: 80,
      description: 'bla bla bla bla bla'
    },
  ];

  addName(name: string) {
    this.names.push(name);
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  clickOnProduct(id: number){
    console.log("product");
    console.log(id);
  }
}
// export class AppComponent {
//   title = 'platziStore';
//   personas = ['Juan', 'Mauricio', 'Isabel', 'Andrea', 'Roberto'];
//   longitud: number = this.personas.length;
//   indice: number;
//   nombre: string;

//   // Metodo para adicionar item al arreglo
//   addItem(name: string) {
//     this.personas.push(name);
//     console.log(this.personas);
//     this.longitud = this.personas.length;
//   }
//   deleteItem(index: number) {
//     this.personas.splice(index, 1);
//     this.longitud = this.personas.length;
//   }
// }