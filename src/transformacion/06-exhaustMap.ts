import { fromEvent, interval } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';
// =====================================================================
// mantiene solamente una suscripción activa, antes de poder añadir otra 
// suscripción para emitir otros valores, si hay nuevos valores y existe 
// una suscripción activa los ignora.
// Sirve cuando un observable emite muchos valores y se desean ignorar.
// =======================================================================


const interval$ = interval(500).pipe(take(5));
const click$ = fromEvent(document, 'click');

click$.pipe(
    exhaustMap((v, i) => interval$.pipe()),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})