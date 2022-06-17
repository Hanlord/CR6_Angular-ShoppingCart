import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
food: Array<{name:string, price:number,img:string,description:string,availability:boolean}>=[
  {
    name:"Pizza Inferno",
    price:15.50,
    img:"https://media.istockphoto.com/photos/delicious-pizza-with-bacon-and-chicken-teriyaki-served-on-a-wooden-picture-id1290330077?b=1&k=20&m=1290330077&s=170667a&w=0&h=ErkOlJw1ajqoEC7GwCdvBCR05F3UrmsobQJFEekNGLg=",
    description: "lorem ipsum",
    availability: true
  },
  {
    name:"Pizza Capricciosa",
    price:15.50,
    img:"https://media.istockphoto.com/photos/pizza-capricciosa-pizza-all-capricciosa-traditional-italian-pizza-on-picture-id1205494126?b=1&k=20&m=1205494126&s=170667a&w=0&h=eLDmBfVIsrRoMNn3RFBavdqALVBH_Gp1eStQLVq_8Xg=",
    description: "lorem ipsum",
    availability: true
  },
  {
    name:"Pizza Margerita",
    price:10.70,
    img:"https://media.istockphoto.com/photos/italian-pizza-margherita-with-tomatoes-and-mozzarella-cheese-on-picture-id1280329631?b=1&k=20&m=1280329631&s=170667a&w=0&h=b19W5tpGO_gfQ3e5TmXSx72mL6genH-7yndt0QuVVEo=",
    description: "lorem ipsum",
    availability: false
  },
  {
    name:"Pizza Prosciutto",
    price:15.50,
    img:"https://media.istockphoto.com/photos/pizza-with-prosciutto-and-arugula-on-white-background-picture-id1313124969?b=1&k=20&m=1313124969&s=170667a&w=0&h=1A0uNRhbi3zBiPy3H060ejxIWrPKSzHnBoGGHzTwn_0=",
    description: "lorem ipsum",
    availability: true
  },
  {
    name:"Penne al Gorgonzola",
    price:9.80,
    img:"https://media.istockphoto.com/photos/pasta-with-gorgonzola-picture-id545803040?b=1&k=20&m=545803040&s=170667a&w=0&h=VFsHyXfH2U-tvLsDvXsap0ZFHHS3Do2XpQ_7aZE49r0=",
    description: "lorem ipsum",
    availability: true
  },
  {
    name:"Spaghetti Carbonara",
    price:10.20,
    img:"https://cdn.pixabay.com/photo/2018/11/10/00/38/pasta-3805772__340.jpg",
    description: "lorem ipsum",
    availability: true
  },
  {
    name:"Tiramisu",
    price:10.20,
    img:"https://media.istockphoto.com/photos/portion-of-tiramisu-picture-id1288455694?b=1&k=20&m=1288455694&s=170667a&w=0&h=TEGzEUsuHcLreb_cMmlkxO9FDOpbw7DE-47AoeI5VWw=",
    description: "lorem ipsum",
    availability: true
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
