import { Component } from '@angular/core';
import {Post} from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';
  posts = [
    new Post(1, 'Article1', 'bla bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla bla bla bla bla bla ', 1),
    new Post(2, 'Article2', 'bla bla bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla bla', -2),
    new Post(3, 'Article3', 'bla bla bla bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla ', 0),
    new Post(4, 'Article4', 'bla bla bla bla bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla', -4),
    new Post(5, 'Article5', 'bla bla bla bla bla bla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabla bla bla bla blabl', 5),
  ];
}
