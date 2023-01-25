import { fromEvent, interval, mergeMap, switchMap, mergeAll, map, take } from 'rxjs';


const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // map(() => interval$),
    // mergeAll(),
    // switchMap(() => interval$) // mantiene una unica susbscripcion viva
    // mergeMap(() => interval$) //mantiene cuantas subscripciones se quieran
).subscribe(console.log);