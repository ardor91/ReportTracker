import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { StudentsComponent } from './students/students.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AddContactsWindowComponent } from './profile/shared/add-contacts-window/add-contacts-window.component';
import { DialogContentNewContact } from './profile/shared/add-contacts-window/add-contacts-window.component';
import { AddSkillsWindowComponent } from './profile/shared/add-skills-window/add-skills-window.component';
import { DialogContentNewSkill } from './profile/shared/add-skills-window/add-skills-window.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { CookieService } from 'ngx-cookie-service';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './_guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentDetailComponent,
    NavComponent,
    ErrorComponentComponent,
    ErrorComponent,
    HomeComponent,
    ProfileComponent,
    AddContactsWindowComponent,
    DialogContentNewContact,
    AddSkillsWindowComponent,
    DialogContentNewSkill,
    RegistrationComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule
  ],
  entryComponents: [
    DialogContentNewContact,
    DialogContentNewSkill
  ],
  providers: [
    AuthGuard,
    CookieService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
