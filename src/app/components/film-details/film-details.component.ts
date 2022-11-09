import { Component, OnInit } from '@angular/core';
import { FilmDetailsResponse } from 'src/app/interfaces/filmDetails.interface';
import { ActorService } from 'src/app/services/actor.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute, private moviesService: MoviesService) { }
  filmId: string = {} as string;
  filmSelected: FilmDetailsResponse = {} as FilmDetailsResponse;
  //actorMovies: Cast[] = []

  ngOnInit(): void {
    debugger
    this.route.params.subscribe(res =>{
      this.filmId = res['id'];
    })
    this.getFilmsDetails(this.filmId);
    //this.getMovies(this.filmId);
  }
  getImageUrl(poster: FilmDetailsResponse){
    return `${environment.FILM_IMG_URL}${poster.poster_path}`
  }
  getFilmsDetails(id : string){
    
    this.moviesService.getFilmsDetails(id).subscribe(res =>{
      this.filmSelected = res;
    })

  }
  /*getMovies(actorId : string){
    this.moviesService.getActorMovie(actorId).subscribe(res =>{
      this.actorMovies = res.cast;
    })

  }
  */

}
