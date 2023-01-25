// ========================================
// obtiene el producto de la salida de la
// suscripción que se le pasa internamente,
// es decir mantiene una suscripción
// independiente por cada valor emitido
// =========================================
import { fromEvent, interval, mergeMap, of, takeUntil } from 'rxjs';

const letras$ = of('a', 'b', 'c');

// ==================================
// EJER 1
// ==================================
// letras$.pipe(
//     mergeMap((letra, index) =>
//         interval(1000).pipe(
//             map(i => letra + i + index),
//             take(3)
//         ))
// )
// .subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });
// ==================================
// EJER 2
// ==================================
const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
).subscribe(console.log)