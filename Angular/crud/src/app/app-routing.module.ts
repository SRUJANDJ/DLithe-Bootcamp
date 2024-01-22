import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminComponent } from './admin/admin.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { AuthGuardService } from './services/auth.service';


const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardService]},
  {path:"userpage",component:UserpageComponent,canActivate:[AuthGuardService]},
  {path:'personaldetails',component:PersonalDetailsComponent,canActivate:[AuthGuardService]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }