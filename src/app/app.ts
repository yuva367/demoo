import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Post } from './post/post';
import { Multi } from './multi/multi';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Post, Multi, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'myyyy';
}
