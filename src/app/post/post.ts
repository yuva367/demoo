import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ColorPickerModule } from 'primeng/colorpicker';
@Component({
  standalone:true,
  selector: 'app-post',
  imports: [ButtonModule,ColorPickerModule,ReactiveFormsModule,FormsModule,InputTextModule],
  templateUrl: './post.html',
  styleUrl: './post.scss'
})
export class Post {

  title = new FormControl('');


  

}
