import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  full_name: string="Amit";
  app_area: string="Angular apps"
  columnspan: number=10;
  firstname:string="Amit";
  lastname:string="Raj Singh";
  gender:string="male";
  age:number=22;
  hidedetails:boolean=false;

  name: string="Amit";
  email: string="me@google.com";
  toggledetails(): void{
    this.hidedetails=!this.hidedetails;
  }
  constructor() { }

  ngOnInit(): void {
  }
}