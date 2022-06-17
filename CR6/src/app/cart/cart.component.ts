import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  name = new FormControl('');

  formInfo = new FormGroup({
  name: new FormControl(""),
  address:new FormControl(""),
});
  constructor() { }

  ngOnInit(): void {
  }

}
