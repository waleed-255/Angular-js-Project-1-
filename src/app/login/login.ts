import { Component } from '@angular/core';
import { MyServiceAuth } from '../my-service-auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  uemail:any;
  upass:any;

  constructor(private ms: MyServiceAuth, private router : Router)
  {

  }

  generatetoken()
  {
     if(this.uemail=="abc@gmail.com" && this.upass=="12345")
     {
    this.ms.signin()
    alert("Login Successfull")
    this.router.navigate(["/gallery"])
     }
     else
     {
      alert("Wrong Crendentials")
     }
  }
}
