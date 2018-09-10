import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsListComponent } from './students/students-list/students-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full'},
  { path: 'students', component: StudentsListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
