import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'students', component: StudentsListComponent},
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
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
