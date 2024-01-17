import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngChildComponent } from './ang-child/ang-child.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddPipe } from './addpipe.pipe';
import { ColorchangeDirective } from './directives/colorchange.directive'




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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
