import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  showMoreTags=false
  itemName=''
  foodList:any=[]
  constructor( private fs:FoodService, private router:Router) { }

  ngOnInit(): void {
    this.fs.getFoodItems().subscribe((response)=>{
      this.foodList=response
      console.log(this.foodList);
      
    })
      
  }
  showMore(name:string){
    this.showMoreTags=true
    this.itemName=name
  }

  loadCart(){
    this.router.navigateByUrl('cart')
  }
  

}
