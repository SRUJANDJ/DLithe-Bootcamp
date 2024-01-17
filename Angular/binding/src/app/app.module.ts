import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgtestComponent } from './ngtest/ngtest.component';
import { PipesTopicComponent } from './pipes-topic/pipes-topic.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NgtestComponent,
    PipesTopicComponent,
    EmplistComponent,
    EmpdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
