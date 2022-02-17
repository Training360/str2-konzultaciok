import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: Observable<User> = this.activatedRoute.params.pipe(
    switchMap(params => this.userService.get(params['id'])),
    // A következő sor opcionális, csak demonstráció:
    // catchError(this.handleError('a kért felhasználó nem található', new User())),
  );

  errorMessage: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  private handleError(operation = '', result?: User) {
    return (error: HttpErrorResponse): Observable<User> => {
      this.errorMessage = `${operation}, ${JSON.stringify(error)}`;
      return of(new User());
    }
  }

}
