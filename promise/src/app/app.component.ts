import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){ 

    // let stream$ = new Observable(observer => {
    //   console.log(`observable seexution`);

    //   observer.next(1);
    //   observer.next(2);

    //   setTimeout( () => {
    //     observer.next(3);
    //   }, 3000);

    // });

    // let sub = stream$.subscribe(
    //   value => alert(value + "!!!!!!!!"),
    //   error => alert(error),
    //   () => console.log('done')
    // );


    let subject = new Subject();

    subject.subscribe((v) => {
      console.log('ObserverA: ' + v);
    });

    subject.subscribe((v) => {
      console.log('ObserverB: ' + v);
    });

    subject.next('First Song');
    subject.next('Second Song');

    subject.subscribe((v) => {
      console.log('ObserverC: ' + v);
    });

    subject.next('Third Song');
    

  }

  

}
