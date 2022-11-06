import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ActorService } from 'src/app/services/actor.service';
import { Actor } from 'src/app/interfaces/actor.interface';
import { ActorDetailResponse } from 'src/app/interfaces/actor-detail.interface';
import { MatDialog } from '@angular/material/dialog';
import { ActorDetailComponent } from '../actor-detail/actor-detail.component';
import { environment } from 'src/environments/environment.prod';
import { DeleteSessionDto } from 'src/app/dto/delete-session.dto';
import { CreateSessionDto } from 'src/app/dto/create-session.dto';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  reqToken = '';
  page = 1;
  numPages = 0;
  actorList: Actor[] = [];
  actorSelected: ActorDetailResponse | undefined;
  approved = false;



  constructor(private authService: AuthService, private actorService: ActorService, private router: Router, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getActors(1);
  }

  requestToken(){
    this.authService.createRequest().subscribe((res) => {
      this.reqToken = res.request_token;
      console.log(this.reqToken);
      window.location.href = `https://www.themoviedb.org/authenticate/${this.reqToken}?redirect_to=http://localhost:4200/actor-list`
    })
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
  getActorDetail(actor : Actor){
    this.actorService.getActorDetail(actor).subscribe(res => {
      this.actorSelected = res;
      this.dialog.open(ActorDetailComponent, {
        data: {
          actorInfo: this.actorSelected
        }
      })

    })
  }

  getImageUrl(poster: Actor){
    return `${environment.posterPath}/w500/${poster.profile_path}`
  }

  logout() {
    let deleteSessionDto = new DeleteSessionDto();
    if (localStorage.getItem('session_id') != null) {
      deleteSessionDto.session_id = localStorage.getItem('session_id')!;
      this.authService.deleteSession(deleteSessionDto).subscribe((res) => {
        if (res.success) {
          localStorage.removeItem('session_id');
          this.approved = false;
        }
      });
    }
  }
}


