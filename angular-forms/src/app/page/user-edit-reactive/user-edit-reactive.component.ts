import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit-reactive',
  templateUrl: './user-edit-reactive.component.html',
  styleUrls: ['./user-edit-reactive.component.scss']
})
export class UserEditReactiveComponent implements OnInit {

  user: User = new User();

  // FormGroup: {controls: {[key: string]: FormControl}}
  group: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-űA-Ű \-\.]{7,50}$/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    category: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(
    private ar: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap( params => this.userService.get(params['id']) ),
    ).subscribe(
      user => {
        this.user = user;
        this.setFormGroup();
      },
      err => console.error(err),
    );
  }

  setFormGroup(): void {
    for (const key of Object.keys(this.user)) {
      if (this.group.controls[key]) {
        this.group.controls[key].setValue(this.user[key]);
      }
    }
  }

  onUpdate(): void {
    this.userService.update(this.group.value).subscribe(
      user => this.router.navigate(['/', 'user']),
      err => console.error(err),
    );
  }

}
