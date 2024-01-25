import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[]
  constructor(private fs:FoodService) { }

  ngOnInit(): void {
    this.fs.getCartItems().subscribe((response)=>{
      this.cartItems=response
    })
  }

}
