import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { CommonModule, NgFor } from "@angular/common";

@Component({
  selector: 'app-test',
  imports: [NgFor,CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  global2:any = []
  valid:boolean = true;
  constructor(private service:Apiservice)
  {
    this.service.fetch().subscribe((rec) => {
      console.log(rec)
      this.global2 = rec
      console.log(this.global2)
    })

  }
}
