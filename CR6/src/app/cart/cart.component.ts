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

ngOnInit(): void {
  this.items = this.cartService.getItems();
}

getItems() {
  return this.items;
}

clearCart() {
  this.items = [];
  return this.items;
}

productPrice() {
  let total = 0;
  this.items.forEach((product) => {
  total += product.price
  })
  return total
  }

servicePrice () {
  return this.productPrice()*0.1
  }
discountPrice() {
  const productsTotal = this.productPrice();
  const serviceTotal = this.servicePrice();
  const priceTotal = productsTotal + serviceTotal;
  if (priceTotal < 40) {
  return 0;
} else {
  return priceTotal*0.15
}
}
totalPrice() {
  return (this.productPrice() + this.servicePrice()) - this.discountPrice()
}   
}

  
