import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post {
  title = new FormControl('');
  updatename(){
    this.title.setValue("nancy")
  }
  

}
