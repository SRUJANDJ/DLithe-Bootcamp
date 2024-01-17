import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { FetchDataComponent } from './fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginpageComponent,
    HomepageComponent,
    FetchDataComponent
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
