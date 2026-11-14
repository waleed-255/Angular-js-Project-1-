import { CommonModule, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  username:any;
  useremail:any;

  valid:boolean = false;

  validate()
  {
    if(this.username =="admin" && this.useremail == "admin@gmail.com")  
    {
      this.valid = true; 
    }
    else
    {
      console.log("Did not Matched")
      this.valid = false;
    }
  }
}
