import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const routes: Routes = [
  {path:"login",component:LoginpageComponent},
  {path:"home",component:HomepageComponent},
  {path:"fetch",component:FetchDataComponent},
  {path:"",component:LoginpageComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
