import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  details=[]
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.ds.getData().subscribe((response)=>{
      this.details=response
    })
  }
  goBack(){
    this.router.navigateByUrl('')
  }

}
