import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentformComponent } from './studentform/studentform.component';


const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'bala', component: StudentlistComponent },
  { path: 'form', component: StudentformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
