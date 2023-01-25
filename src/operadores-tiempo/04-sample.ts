// ==============================================================
// sample: tiene dos observables encadenados,
// el interno desencadena los valores del observable externo.
// ==============================================================
import { fromEvent, interval, sample } from "rxjs";


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);