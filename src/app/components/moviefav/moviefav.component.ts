import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie-fav.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-moviefav',
  templateUrl: './moviefav.component.html',
  styleUrls: ['./moviefav.component.css']
})
export class MoviefavComponent implements OnInit {

  constructor(private movieService : MoviesService) {}

  movieList : Movie[] = []
  page = 1;

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";



  ngOnInit(): void {
    this.getMoviesFav(this.page);
  }

  getMoviesFav(page: number){
    this.movieService.getFavMovie(page).subscribe(res =>{
      this.movieList = res.results;
    })
  }
  getPage(pages: number){
    if (pages > 0){
      this.getMoviesFav(pages);
      this.page = pages;
    }
  }



}
