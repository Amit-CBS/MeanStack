import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public employees=[
  {id : 1, name:"Mr. Agnishwar", age:22},
  {id : 2, name:"Mr. Amit", age:21},
  {id : 3, name:"Miss. Debarati", age:20},
  {id : 4, name:"Mr. Prith", age:22}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
