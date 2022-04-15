import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoxServiceService {

  constructor(private getFox:HttpClient) { 

  }
  getFoxx(){
    return this.getFox.get('https://randomfox.ca/floof/?ref=apilist.fun')
  }
}
