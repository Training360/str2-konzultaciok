import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-component-interactions-pipe';

  selectedUser!: User;

  users: User[] = [
    {id: 1, name: 'Kiss Piri', address: 'piri@gmail.com', active: true},
    {id: 2, name: 'Kiss Misi', address: 'misi@gmail.com', active: true},
    {id: 3, name: 'Kiss Cili', address: 'cili@gmail.com', active: true},
    {id: 4, name: 'Kiss Mimi', address: 'mimi@gmail.com', active: true},
    {id: 5, name: 'Kiss Gizi', address: 'gizi@gmail.com', active: true},
  ];

  setSelectedUser(user: User): void {
    this.selectedUser = user;
  }

  deleteUser(user: User): void {
    this.users.splice(
      this.users.findIndex( u => u.id === user.id ),
      1
    );
  }

}
