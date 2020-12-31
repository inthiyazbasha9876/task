import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccounDetailsComponent } from './accoun-details/accoun-details.component';
import { CalenderComponent } from './calender/calender.component';
import { FreezeComponent } from './freeze/freeze.component';
import { PluraltaskComponent } from './pluraltask/pluraltask.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  {path:'',component:AccounDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
