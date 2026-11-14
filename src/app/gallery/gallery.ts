import { Component, TRANSLATIONS } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [NgIf,CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  showall:boolean = false;
  showtree:boolean = false;
  showlandscape:boolean = false;
  showghaas: boolean = false;
  showtrees()
  {
    this.showtree = true;
    this.showlandscape = false;
    this.showghaas = false;

  }
  showlandscapes()
  {
    this.showtree = false;
    this.showlandscape = true;
    this.showghaas = false;

  }

  showGhaas()
  {
    this.showtree = false;
    this.showlandscape = false;
    this.showghaas = true;

  }

  showallpictures()
  {
    this.showtree = true;
    this.showlandscape = true;
    this.showghaas = true;

  
  }
}








