import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule,CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  id!:string;
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
  }

}
