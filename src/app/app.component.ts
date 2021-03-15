import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<router-outlet></router-outlet>',  //otra forma de llamarlo
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'platzi-store';
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