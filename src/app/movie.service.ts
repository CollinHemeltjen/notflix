import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=1537cc65a733e53a667e64343a5a74b6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  }
}
