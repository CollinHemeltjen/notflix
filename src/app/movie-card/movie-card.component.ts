import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  private defaultUrl: String = 'https://image.tmdb.org/t/p/w500';

  @Input() posterImage: String;
  @Input() movieId: String;

  constructor() { }

  ngOnInit() {
  }
}
