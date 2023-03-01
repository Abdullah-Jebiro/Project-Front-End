import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUserWithPage } from './IUserWithPage';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl: string = `https://reqres.in/api/users`;

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<IUserWithPage> {
    return this.http
      .get<IUserWithPage>(this.usersUrl + '?page=' + page)
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }

  Users = this.http
    .get<IUserWithPage>(this.usersUrl + '?page=1')
    .pipe(tap((data) => console.log(JSON.stringify(data))));
}
