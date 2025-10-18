import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio2.html',
  styleUrl: './ejercicio2.css'
})
export class Ejercicio2 {
  mensaje1: string = "¡Bienvenido a MovieApp!";
  mensaje2: string = "Explora nuestro catálogo de películas";
  mostrarMensaje2: boolean = false;
}
