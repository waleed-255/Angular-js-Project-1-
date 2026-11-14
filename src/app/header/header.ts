import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MyServiceAuth } from '../my-service-auth';
import { Router } from '@angular/router';
import { CommonModule, NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(public msauth:MyServiceAuth, private router : Router)
  {
    this.msauth.token = msauth.token
  }


 
  logout()
  {
    this.msauth.token = false;
    localStorage.setItem('token',"false")
    this.router.navigate(["/Login"])
  }

  
}
