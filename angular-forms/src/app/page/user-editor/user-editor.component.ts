import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  user$: Observable<User> = this.ar.params.pipe(
    switchMap( params => this.userService.get(params['id']) ),
  );

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(userForm: NgForm): void {
    if (userForm.invalid) {
      alert('You are a smart guy but I am smarter than you!');
    }

    const user: User = (userForm.value as User);
    if (!user.email.split('.').find( part => part.includes(
      user.name.toLowerCase().split(' ')[0])
    )) {
      alert('The email address must contain the first part of the user name!')
      return;
    }

    this.userService.update(user).subscribe(
      user => this.router.navigate(['/', 'user']),
      err => console.error(err),
    );
  }

}
