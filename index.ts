import { Observable } from "rxjs";

import { Observable } from 'rxjs'

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable(subscriber => {
  helloButton.addEventListener('click', (event) => {
    subscriber.next(event);
  });
});

helloClick$.subscribe(event => console.log(event));