
// ==================================
// takeUntil: emite el flujo de información
// hasta que se cumple un evento, o una condición,
// y llama al complete de la suscripción.
// ==================================

// ==================================
// skip: salta el flujo de información
// hasta la condición especificada. 
// ==================================
import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const botton = document.createElement('button');
botton.innerHTML = 'Detener timer';

document.querySelector('body').append(botton);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(botton, 'click');
const clickBtn$ = fromEvent(botton, 'click').pipe(
    tap(() => console.log(' tap antes del skip')),
    skip(1),
    tap(() => console.log(' tap despues del skip')),
);

counter$.pipe(
    takeUntil(clickBtn$)
).
    subscribe(
        {
            next: val => console.log('next', val),
            complete: () => console.log('complete')
        }
    )