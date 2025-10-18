import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies/movies';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episodios.html',
  styleUrl: './episodios.css'
})
export class Episodios implements OnInit {
  episodes: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getEpisodes().subscribe({
      next: (data) => {
        this.episodes = data.Episodes;
        console.log('Episodios cargados:', this.episodes);
      },
      error: (error) => {
        console.error('Error al obtener episodios:', error);
      }
    });
  }
}
