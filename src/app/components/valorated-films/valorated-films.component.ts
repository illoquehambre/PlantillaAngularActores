import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilmDetailsResponse } from 'src/app/interfaces/filmDetails.interface';
import { Film } from 'src/app/interfaces/filmList.interface';
import { FilmsService } from 'src/app/services/films.service';
import { environment } from 'src/environments/environment';
import { FilmDetailsComponent } from '../film-details/film-details.component';

@Component({
  selector: 'app-valorated-films',
  templateUrl: './valorated-films.component.html',
  styleUrls: ['./valorated-films.component.css']
})
export class ValoratedFilmsComponent implements OnInit {

  filmList: Film[] = []
  filmSelected: FilmDetailsResponse = {} as FilmDetailsResponse
  numPages=0
  actualPage=1

  constructor(
    private filmService: FilmsService,
    public dialog: MatDialog
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
  
  showImg(perfil: null|string ) {    
    return `${environment.FILM_IMG_URL}${perfil}`;
  }
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


}
