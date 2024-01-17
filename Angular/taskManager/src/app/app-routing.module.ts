import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskListComponent } from './components/task-list/task-list.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'tasklist',component:TaskListComponent},
  {path:'',component:LoginComponent,pathMatch:'full'},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
