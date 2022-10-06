import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fejlec',
  templateUrl: './fejlec.component.html',
  styleUrls: ['./fejlec.component.css']
})
export class FejlecComponent implements OnInit {
  public nev:string = "Kovács János";
  public sorok:Number = 3;

  constructor() { }

  ngOnInit(): void {
    this.nev = "Kovács István";
  }
  
  kattintas() {
    console.log("sárga");  
    this.nev = "Sárga";
    this.sorok = 2;
    //document.getElementsByTagName("body")[0].style.backgroundColor = "yellow";
  }

}


