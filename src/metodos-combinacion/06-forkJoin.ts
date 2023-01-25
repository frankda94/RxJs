// ===================================================
// retorna el valor de cada uno de los 
// observables cuando se completan.( deben ser finitos)
// ====================================================

import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";


const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(
    {
        num: numeros$,
        interval$,
        letras$
    }
).subscribe(console.log);
