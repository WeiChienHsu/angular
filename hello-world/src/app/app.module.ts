import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
