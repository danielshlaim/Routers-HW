import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '../dog-service.service';

@Component({
  selector: 'app-dog-comp',
  templateUrl: './dog-comp.component.html',
  styleUrls: ['./dog-comp.component.css']
})
export class DogCompComponent implements OnInit {

  dog:any = {};
  SeeUnSee:boolean = false;

  constructor(private setDog:DogServiceService) { 
    this.setDog.getDog().subscribe((v)=>{
        this.dog= v;
    })
  }

  ngOnInit(): void {
  }
  dogToggle(){
    this.SeeUnSee = !this.SeeUnSee
  }

}
