import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngChildComponent } from './ang-child/ang-child.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddPipe } from './add.pipe';
import { ColorchangeDirective } from './directives/colorchange.directive'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    AngChildComponent,
    DisplayComponent,
    FormComponent,
    AddPipe,
    ColorchangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
