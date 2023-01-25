// ==================================
// emite solamente el primer valor del 
// flujo del observable y llama el complete
// del observable. También se puede aplicar
// un filtro para admitir mas flujos.
// ==================================

import { first, fromEvent, tap, map } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document, 'click');
// ==================================
// Ejecutar click y detener subscribe
// ==================================
// click$.pipe(
//     first()
// )
//     .subscribe({
//         next: val => console.log('next:', val),
//         complete: () => console.log('complete')
//     });

// ==================================
// Ejecutar click con alguna condicion
// ==================================
click$.pipe(
    tap(({ clientY }) => console.log(' tap', clientY)),
    first<MouseEvent>(event => event.clientY >= 150),
    // map( ({clientX, clientY}) => ({clientX, clientY})) //desesctructuracion
    map((obj) => ({ x: obj.clientX, y: obj.clientY })),
    tap(({ x, y }) => console.log('tap2', x, ' ', y)),
    map(res => res.y + 2)
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    });