import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.scss']
})
export class MoviesDisplayComponent implements OnInit {

  movies: Object;

  constructor(private data: MovieService) { }

  ngOnInit() {
    this.data.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

}
