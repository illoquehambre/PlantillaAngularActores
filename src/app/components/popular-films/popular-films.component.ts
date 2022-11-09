import { Component, OnInit } from '@angular/core';
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
  
  showImg(perfil: null|string ) {    
    return `${environment.posterPath}${perfil}`;
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
