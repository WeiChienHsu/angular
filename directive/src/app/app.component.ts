import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSelected = false;
  onClick(){
    this.isSelected = ! this.isSelected;
    this.canSave = ! this.canSave
  }

  courses = [ 
    {id: 1, name: "Course1"},
    {id: 2, name: "Course2"},
    {id: 3, name: "Course3"}
   ];

   onAdd(){
     const currentId = this.courses.length + 1;
     this.courses.push({id: currentId, name: "Course" + currentId });
   }

   onRemove(course){
     let index = this.courses.indexOf(course);
     this.courses.splice(index,1 );
   }

   onReset(){
     this.courses =[
      {id: 1, name: "Course1"},
      {id: 2, name: "Course2"},
      {id: 3, name: "Course3"}
     ]
   }

   trackCourse(index, course){
     return course ? course.id : undefined;
   }

  canSave = false;
  viewMode = "map";


}
