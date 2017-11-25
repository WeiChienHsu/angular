import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { TitleCasePipe } from './title-case.pipe';
import { FavoriteComponent } from './components/favorite/favorite.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    TitleCasePipe,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
