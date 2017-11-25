import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`<div class="container">
                 <h2> {{ getTitle() }} </h2>
                 <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                  </ul>
                    <button class="btn btn-primary" [class.btn-lg] = "getBigger" >Save</button>
                    <button class="btn btn-primary" (click) = "onSave($event)" >Save</button>
                    <input [(ngModel)] = "email" (keyup.enter) = "onKeyUp()">
                    <p>
                       {{text | summary}}

                    </p>
                    <span class="glyphicon" [class.glyphicon-star] = "isClicked" [class.glyphicon-star-empty] = "!isClicked" (click) = "activeButton()" ></span>
                    <br>
                    <input type="text" [(ngModel)]="words"> 
                    <br>
                    {{words | titleCase }}       
             
            </div>
              `
})

export class CoursesComponent {
    title = "Course Lists";
    text = "Camping is an outdoor activity involving overnight stays away from home in a shelter, such as a tent, a caravan, or a motorhome. Generally participants leave developed areas to spend time outdoors in more natural ones in pursuit of activities providing them enjoyment. To be regarded as camping a minimum of one night is spent outdoors, distinguishing it from day-tripping, picnicking, and other similarly short-term recreational activities. Camping can be enjoyed through all four seasons."
    courses;
    wo
    getTitle() {
        return this.title;
    }

    isClicked = true;

    activeButton(){
        this.isClicked = !this.isClicked;
        console.log(this.isClicked);
    }


    getBigger = true;

    onSave($event){
        $event;
        console.log("button was clicked",$event);
    }

    email = "weichien711@gmail.com"
    onKeyUp(){
        console.log(this.email);
    }

    constructor(service : CoursesService) {
        this.courses = service.getCourses();
    }
}