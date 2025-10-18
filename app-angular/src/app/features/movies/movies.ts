import { Component } from '@angular/core';
import { SearchBar } from "../../components/ui/search-bar/search-bar";
import { MovieList } from "../../components/layouts/movie-list/movie-list";
import { Hero } from "../../components/layouts/hero/hero";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [SearchBar, MovieList, Hero],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {

}
