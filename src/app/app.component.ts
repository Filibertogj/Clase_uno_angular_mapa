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
  {activo:true, nombre: 'Colombia'},
  {activo:true, nombre: 'Brasil'},
  {activo:false, nombre: 'Argentina'},
  {activo: true, nombre:  'Polonia'},
  {activo: false, nombre: 'Alemania'},
  {activo: true, nombre: 'Francia'}
]

constructor(){
  setTimeout(() => {
    this.deshabilitado = false;
  }, 3000)
}
ejecutar(){
  alert("Ejecutando...")
}





}
