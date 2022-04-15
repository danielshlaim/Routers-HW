import { Component, OnInit } from '@angular/core';
import { FoxServiceService } from '../fox-service.service';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {

  fox:any = {}
  constructor(private setFox:FoxServiceService) { 
    this.setFox.getFoxx().subscribe((fa)=>{
      this.fox= fa
    })
  }

  ngOnInit(): void {
  }
  
}
