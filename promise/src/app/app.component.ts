import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){ 

    let stream$ = new Observable(observer => {
      console.log(`observable seexution`);

      observer.next(1);
      observer.next(2);
      observer.error(new Error('no movie'))

    });

    let sub = stream$.subscribe(
      value => alert(value + "!!!!!!!!"),
      error => alert(error),
      () => console.log('done')
    );

    let sub2 = stream$.subscribe(
      value => alert(value + "????????"),
      error => alert(error),
      () => console.log('done')
    );

  }

  

}
