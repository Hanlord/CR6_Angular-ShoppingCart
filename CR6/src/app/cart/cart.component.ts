import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuComponent } from '../menu/menu.component';
import { Injectable } from '@angular/core';
import { IProducts } from '../IProducts';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root',
  })
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: IProducts[] = [];

  name = new FormControl('');
  formInfo = new FormGroup({
  name: new FormControl(""),
  address:new FormControl(""),
});
  constructor(private cartService: CartService) { }
 addToCart(product: IProducts) {
  this.items.push(product);
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}
ngOnInit(): void {
  this.items = this.cartService.getItems();
}

}
  
