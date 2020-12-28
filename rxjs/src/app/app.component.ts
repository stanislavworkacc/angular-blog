import { Component } from '@angular/core';
import {Subscription, Observable, observable} from 'rxjs';
//import { map, filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sub: Subscription;

  constructor() {
    const stream$ = new Observable(observable => {

      setTimeout( () => {
          observable.next(1)
      }, 1500)

      setTimeout(() => {
        observable.complete()
      }, 2100)

      setTimeout(() => {
        observable.error('Something went wrong')
      }, 2000)

      setTimeout( () => {
        observable.next(2)
      }, 2500)

      setTimeout( () => {
        observable.next(3)
      }, 3500)

    })

    this.sub = stream$
      .subscribe(
        value => console.log('Next', value),
        error => console.log('Error', error),
        () => console.log('compteted'))
  }

  stop() {
    this.sub.unsubscribe();
  }
}
