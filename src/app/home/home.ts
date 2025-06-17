import { Component } from '@angular/core';
import { Multi } from '../multi/multi';
import { Post } from '../post/post';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Post,Multi],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
