import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = environment.apiUrl;
  endPoint: string = 'users';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${this.endPoint}`);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}${this.endPoint}/${id}`);
  }

  update(user: User): Observable<User> {
    return this.http.patch<User>(
      `${this.apiUrl}${this.endPoint}/${user.id}`,
      user,
    );
  }

}
