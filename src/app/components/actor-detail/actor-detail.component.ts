import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/interfaces/actor-dialog.interface';
import { Actor } from 'src/app/interfaces/actor.interface';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  actorList: Actor[] = [];

  ngOnInit(): void {
  }
  getImageUrl(poster: Actor){
    return `${environment.posterPath}/w500/${poster.profile_path}`
  }
}
