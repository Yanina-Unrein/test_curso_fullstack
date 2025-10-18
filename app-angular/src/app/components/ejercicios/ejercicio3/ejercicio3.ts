import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio3.html',
  styleUrl: './ejercicio3.css'
})
export class Ejercicio3 {
   usuario = {
    nombre: "Yanina",
    edad: 25,
    profesion: "Frontend Developer",
    ciudad: "Marcos Paz"
  };
}
