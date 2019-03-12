import { Component   } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Jorge";
  nombre2 = "JOrge de JeSus MARtineZ"
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  decimalNumber = 0.3333;
  salario = 1234.5;
  hero = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      numero: 18
    }
  }

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve('Llego la data'))
  })

  fecha = new Date();

  video = 'q4zAY5PxPzc';

  activar:boolean = true;
}
