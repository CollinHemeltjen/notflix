import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private defaultUrl: String = 'https://image.tmdb.org/t/p/original';
  photo: String = 'https://image.tmdb.org/t/p/original/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg';

  constructor(private route: ActivatedRoute, private data: MovieService) { }

  movieId: String;
  movie: Object;

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.data.getMovie(this.movieId).subscribe( data => {
      this.movie = data;
      console.log(this.movie);
    });
  }


}
