import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDetailResponse } from 'src/app/interfaces/actor-detail.interface';
import { DialogData } from 'src/app/interfaces/actor-dialog.interface';
import { Actor } from 'src/app/interfaces/actor.interface';
import { Cast } from 'src/app/interfaces/movie-credits.interface';
import { ActorService } from 'src/app/services/actor.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private actorService: ActorService) { }
  actorId: string = {} as string;
  actor: ActorDetailResponse = {} as ActorDetailResponse;
  actorMovies: Cast[] = []

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      this.actorId = res['id'];
    })
    this.getActorDetail(this.actorId);
    this.getMovies(this.actorId);
  }
  getImageUrl(poster: ActorDetailResponse){
    return `${environment.posterPath}/w500/${poster.profile_path}`
  }
  getActorDetail(id : string){
    this.actorService.getActorDetailById(id).subscribe(res =>{
      this.actor = res;
    })

  }
  getMovies(actorId : string){
    this.actorService.getActorMovie(actorId).subscribe(res =>{
      this.actorMovies = res.cast;
    })

  }
}
