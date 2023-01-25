import { concatMap, fromEvent, interval, switchMap, take, tap, map } from 'rxjs';
// =====================================================================
// crea una suscripción independiente por cada valor emitido,
//  pero a diferencia del mergeMap, los nuevos valores emitidos los
//    pone en una Cola de espera, concatenandolos al último valor emitido
//    de la anterior subscripción.
// =======================================================================


const interval$ = interval(500).pipe(take(5));
const click$ = fromEvent(document, 'click');

click$.pipe(
    // switchMap(() => interval$)
    concatMap((v, i) => interval$.pipe(
        // map(interval => interval + i)
    )),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})