import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, empty, Observable } from 'rxjs';
import { IUserWithPage } from './IUserWithPage';
import { UserService } from './user.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private subs = new SubSink();
  Users!: IUserWithPage;

  User$!: Observable<IUserWithPage>;

  constructor(private user: UserService) {
  }

  Users$= this.user.Users;

  ngOnInit(): void {

    this.subs.sink = this.user.getUsers().subscribe({
      next: (data) => {
        this.Users = data;
      },
    });
    
    this.User$ = this.user.getUsers().pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );
  }



}
