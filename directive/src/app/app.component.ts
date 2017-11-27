import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [ 
    {id: 1, name: "Course1"},
    {id: 2, name: "Course2"},
    {id: 3, name: "Course3"}
   ];

   onAdd(){
     const currentId = this.courses.length + 1;
     this.courses.push({id: currentId, name: "Course" + currentId });
   }

  viewMode = "map";
}
