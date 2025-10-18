import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movies/movies';
import { Movie } from '../../../models/Movie';
import { InfoSlider } from "../../ui/info-slider/info-slider";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, InfoSlider],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  movies: Movie[] = [];
  currentIndex = 0;
  intervalId: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getLatestMovies();
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.movies.length) % this.movies.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 6000);
  }

  resetAutoSlide(): void {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }
}
