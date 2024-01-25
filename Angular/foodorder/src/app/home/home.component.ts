import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurentList:any=[]
  foodList:any=[]
  constructor( private fs:FoodService, private router:Router) { }

  ngOnInit(): void {
    this.fs.getRestaurents().subscribe((response)=>{
      this.restaurentList=response
      
        
      
    })
  }
  loadOrders(){
    this.router.navigateByUrl('food')
  }


}
