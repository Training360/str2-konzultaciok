import { Component } from '@angular/core';
import { Movie } from './model/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipes';

  keys: string[] = Object.keys(new Movie());

  phrase: string = '';

  filterKey: string = '';

  movieList: Movie[] = [
    {id: 1, title: 'Tenger', year: 2010, studio: 'Disney', active: true},
    {id: 2, title: 'Óceán', year: 2011, studio: 'Disney', active: true},
    {id: 3, title: 'Tó', year: 2020, studio: 'Disney', active: true},
    {id: 4, title: 'Folyó', year: 1958, studio: 'Disney', active: true},
    {id: 5, title: 'Tengerszem', year: 1967, studio: 'Disney', active: true},
  ];
}
