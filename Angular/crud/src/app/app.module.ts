import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserpageComponent } from './userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PagenotfoundComponent,
    LoginComponent,
    UserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
