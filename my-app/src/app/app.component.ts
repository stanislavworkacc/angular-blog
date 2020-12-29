import { Component } from '@angular/core';
import {Observable} from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  promise: Promise<string> = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Promise Resolve');
    }, 4000);
  });


  myDate: Observable<Date> = new Observable( obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });
}
