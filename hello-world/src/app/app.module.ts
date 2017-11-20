import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
