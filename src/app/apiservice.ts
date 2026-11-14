import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
 
  constructor(private api:HttpClient){

  }
  fetch(){
return this.api.get('https://jsonplaceholder.typicode.com/posts')
  }
}
