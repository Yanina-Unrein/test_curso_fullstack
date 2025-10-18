import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.html',
  styleUrl: './ejercicio4.css'
})
export class Ejercicio4 {
    peliculas = [
    { titulo: "Cadena Perpetua", year: 1994, genero: "Drama" },
    { titulo: "El Caballero Oscuro", year: 2008, genero: "Acción" },
    { titulo: "Pulp Fiction", year: 1994, genero: "Crimen" },
    { titulo: "Forrest Gump", year: 1994, genero: "Drama" }
  ];
}
