import { Component, OnInit } from '@angular/core';
import { CatServiceService } from '../cat-service.service';


@Component({
  selector: 'app-cats-comp',
  templateUrl: './cats-comp.component.html',
  styleUrls: ['./cats-comp.component.css']
})
export class CatsCompComponent implements OnInit {

  cats:any = []

  constructor(private setCat:CatServiceService) {
    this.setCat.getCat().subscribe((c)=>{
      this.cats = c;
    })
   }

  ngOnInit(): void {
  }

 
}
