import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {



  constructor(private GetCat:HttpClient) { }


  getCat(){
    return this.GetCat.get('https://cat-fact.herokuapp.com/facts')
  }

}
