import { Component } from "@angular/core";
import { AuthorsService} from "./authors.service";

@Component({
    selector:"authors",
    template:  ` <h2> {{getNumber()}} {{title}} </h2>
                <ul>
                    <li *ngFor = "let author of authors">
                        {{author}}
                    </li>
                </ul>
    
    `
})

export class AuthorsComponent{
    title = "Authors";
    authors = 0 ;
    getNumber(){
        return this.authors.length;
    }

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
    }

}