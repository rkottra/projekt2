import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fejlec',
  templateUrl: './fejlec.component.html',
  styleUrls: ['./fejlec.component.css']
})
export class FejlecComponent implements OnInit {
  
  public nev:string = "Kovács János";
  public sorok:Number = 3;
  public error:string = "";

  constructor() { }

  ngOnInit(): void {
    this.nev = "Kovács István";
  }
  
  kattintas() {
    this.error = "";
    if (this.nev.split(' ').length < 2) {
      this.error = "Túl kevés tagja van a névnek.";
    } 
    if (this.nev.length < 4) {
      this.error = "Túl kevés karakter.";
    }
  }

}


