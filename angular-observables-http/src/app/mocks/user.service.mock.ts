import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: "root"
})
export class UserServiceMock {

  apiUrl: string = ``;

  constructor() { }

  getAll(): Observable<User[]> {
    return of([
      new User(),
      new User(),
    ]);
  }
}
