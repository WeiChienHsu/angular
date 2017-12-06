import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
    let promise = new Promise( resolve => {
      console.log('Promise execution');
      setTimeout( () => {
        resolve('promise resolved');
      }, 5000);
    });

    promise.then( (value: string) => {
      console.log(value);
    })
}
