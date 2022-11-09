import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/filmList.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.css']
})
export class PopularFilmsComponent implements OnInit {

  filmList: Film[] = []
  //filmSelected: FilmDetailsResponse = {} as FilmDetailsResponse
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
    //public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFilmPage(1);
  }
  getFilmPage(page:number){
    this.filmService.getFilms(page).subscribe(resp =>{
      this.filmList = resp.results;
      this.numPages =resp.total_pages;
      this.actualPage=page;
    })
  }
  counter(){
    return new Array(this.numPages)
  }
  
  showImg(poster: Film) {    
    return `${environment.FILM_IMG_URL}${poster.poster_path}`;
  }
  /*
getFilmInfo(film: Film) {
    this.filmService.getFilmsDetails(film).subscribe(res => {
      this.filmSelected = res;
      debugger
      this.dialog.open(FilmDetailsComponent, {
        width:'60vw',
        height: '50vh ',
        
        data: {
          
          filmInfo: this.filmSelected        
              
        },
      });
    });
  }
*/
}
