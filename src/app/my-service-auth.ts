import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceAuth {
  token: boolean = false;
  signup()
  {

  }

  signin()
  {
     this.token = true
     localStorage.setItem('token',"true") 
  }

  logout()
  {
    this.token = false
    localStorage.setItem('token',"false")
  }
}
