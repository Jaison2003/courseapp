import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewAllCourseComponent } from './view-all-course/view-all-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';

const myroutes=[{path:"",component: AddcourseComponent},
{path:"view-all-course",component:ViewAllCourseComponent }]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewAllCourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
