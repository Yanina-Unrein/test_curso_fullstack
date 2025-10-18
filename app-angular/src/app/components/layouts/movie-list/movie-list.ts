import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/Movie';
import { MovieItem } from "../../ui/movie-item/movie-item";
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../services/movies/movies';
import { MovieModalDetail } from "../../ui/movie-modal-detail/movie-modal-detail";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieItem, MovieModalDetail],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList implements OnInit {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null; 
  isModalOpen: boolean = false;      

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    const allMovies = this.movieService.getMovies();
    this.movies = allMovies.slice(0, allMovies.length - 5);
  }

  onMovieSelected(movie: Movie): void { 
    this.selectedMovie = movie;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedMovie = null;
  }
}
