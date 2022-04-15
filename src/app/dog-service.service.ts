import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  constructor(private dogServ:HttpClient ) { }

  getDog(){
    return this.dogServ.get('https://dog.ceo/api/breeds/image/random')
  }
}
