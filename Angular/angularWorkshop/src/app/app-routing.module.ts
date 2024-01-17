import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { AuthGuardService } from './services/authguard.service';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'display',component:DisplayComponent,canActivate:[AuthGuardService]},
  {path:"",component:FormComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
