import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FilmDetailsResponse } from 'src/app/interfaces/filmDetails.interface';
import { Film } from 'src/app/interfaces/filmList.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-films-valorated',
  templateUrl: './films-valorated.component.html',
  styleUrls: ['./films-valorated.component.css']
})
export class FilmsValoratedComponent implements OnInit {

  filmList: Film[] = []
  filmSelected: FilmDetailsResponse = {} as FilmDetailsResponse
  numPages=0
  actualPage=1

  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";


  constructor(
    private filmService: MoviesService,
  ) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  }
  getFilmPage(page:number){
    this.filmService.getValoratedFilms(page).subscribe(resp =>{
      this.filmList = resp.results;
      this.numPages =resp.total_pages;
      this.actualPage=page;
    })
  }
  counter(){
    return new Array(this.numPages)
  }
  
  showImg(poster: Film ) {    
    return `${environment.FILM_IMG_URL}${poster.poster_path}`;
  }

}
