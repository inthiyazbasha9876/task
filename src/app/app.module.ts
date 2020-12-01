import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { AccounDetailsComponent } from './accoun-details/accoun-details.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PluraltaskComponent } from './pluraltask/pluraltask.component';
import { FreezeComponent } from './freeze/freeze.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    AccounDetailsComponent,
    PluraltaskComponent,
    FreezeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
