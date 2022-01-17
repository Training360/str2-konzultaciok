import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-observables-http';

  users$: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
      // this.userService.getAll().subscribe(
      //   users => console.log(users),
      //   err => console.error('Error: ', err),
      //   () => console.log('complete'),
      // );
  }
}
