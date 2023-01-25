// ==================================
// emite el flujo de información siempre
// y cuando se cumpla la condición establecida.
// Una vez se rompa la condición, el subscribe
// llama el complete.
// ==================================

import { fromEvent, map, takeWhile } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');


click$.pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true) //Inclusive el valor que rompe la condicion
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });