import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../../models/Movie';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css'
})
export class MovieItem {
  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();

  selectMovie(): void {
    this.movieSelected.emit(this.movie);
  }
}
