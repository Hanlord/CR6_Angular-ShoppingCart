import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
food: Array<{name:string, price:number,img:string,description:string}>=[
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
  {
    name:"Pizza",
    price:15,
    img:"",
    description: "lorem ipsum"
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
