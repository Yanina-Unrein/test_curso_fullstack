import { Component } from '@angular/core';
import { Ejercicio2 } from '../../components/ejercicios/ejercicio2/ejercicio2';
import { Ejercicio3 } from '../../components/ejercicios/ejercicio3/ejercicio3';
import { Ejercicio4 } from '../../components/ejercicios/ejercicio4/ejercicio4';

@Component({
  selector: 'app-ejercicios',
  imports: [Ejercicio2, Ejercicio3, Ejercicio4],
  templateUrl: './ejercicios.html',
  styleUrl: './ejercicios.css'
})
export class Ejercicios {

}
