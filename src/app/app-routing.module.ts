import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccounDetailsComponent } from './accoun-details/accoun-details.component';
import { FreezeComponent } from './freeze/freeze.component';
import { PluraltaskComponent } from './pluraltask/pluraltask.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  {path:'',component:FreezeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
