import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  var1 = 10;
  var2 = 20;
  deshabilitado = true;

  nombre:string = '';
paises:any = [
  {cercano: 1, nombre: 'Colombia'},
  {cercano:1, nombre: 'Brasil'},
  {cercano:2, nombre: 'Argentina'},
  {cercano: 3, nombre:  'Polonia'},
  {cercano: 3, nombre: 'Alemania'},
  {cercano: 3, nombre: 'Francia'}
]


lat:number = 51.678418;
lng:number = 7.809007;

constructor(){
  setTimeout(() => {
    this.deshabilitado = false;
  }, 3000)
}
ejecutar(){
  alert("Ejecutando...")
}





}
