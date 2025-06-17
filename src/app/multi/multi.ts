import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multi',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './multi.html',
  styleUrl: './multi.scss'
})
export class Multi {

  
 profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  onSubmit(){
    console.log(this.profileForm.value)
    this.profileForm.reset();

  }

}
