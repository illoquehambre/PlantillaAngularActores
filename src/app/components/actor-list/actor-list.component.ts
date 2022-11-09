import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/interfaces/actor.interface';
import { ActorDetailResponse } from 'src/app/interfaces/actor-detail.interface';
import { ActorDetailComponent } from '../actor-detail/actor-detail.component';
import { environment } from 'src/environments/environment.prod';
import { DialogData } from 'src/app/interfaces/actor-dialog.interface';



@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  reqToken = '';
  page = 1;
  actorList: Actor[] = [];
  approved = false;


  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";



  constructor( private actorService: ActorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getActors(1);
  }


  getActors(page: number){
    this.actorService.getActors(page).subscribe(res => {
      this.actorList = res.results;
    })
    }
  getPage(pages: number){
    if (pages > 0){
      this.actorService.getActors(pages).subscribe(res => {
        this.actorList = res.results;
      })
      this.page = pages;
    }
  }


  getImageUrl(poster: Actor){
    return `${environment.posterPath}/w500/${poster.profile_path}`
  }



}


