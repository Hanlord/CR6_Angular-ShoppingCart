import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
food: MenuComponent = {} as MenuComponent;
id:number=0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe((params: Params) => {
    this.id = +params['productId'];
    
  });
  }

}
