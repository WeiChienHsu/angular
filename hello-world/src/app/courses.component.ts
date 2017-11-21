import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`<h2> {{ getTitle() }} </h2>
              <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
              </ul>
              <button class="btn btn-primary" [class.btn-lg] = "getBigger">Save</button>
              <button class="btn btn-primary" (click) = "onSave($event)" >Save</button>
              <input (keyup.enter) = "onKeyUp()" >
              `
})

export class CoursesComponent {
    title = "Course Lists";
    courses;

    getTitle() {
        return this.title;
    }

    getBigger = true;

    onSave($event){
        $event;
        console.log("button was clicked",$event);
    }

    onKeyUp(){
        console.log("Enter was pressed");
    }

    constructor(service : CoursesService) {
        this.courses = service.getCourses();
    }
}