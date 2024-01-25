import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  restaurentUrl='http://localhost:3000/restaurent'
  foodUrl='http://localhost:3000/food'
  cartUrl='http://localhost:3000/cart'
  constructor(private http:HttpClient) { }

  getRestaurents(){
    return this.http.get(this.restaurentUrl)
  }

  getFoodItems(){
    return this.http.get(this.foodUrl)
  }

  getCartItems(){
    return this.http.get(this.cartUrl)
  }
}
