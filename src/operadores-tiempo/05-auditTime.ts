// =========================================
// auditTime: emite el último valor después 
// de corrido el rango pasado por parámetro. 
// =========================================
import { auditTime, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x }) => x),
    tap(val => console.log('tap', val)),
    auditTime(5000)
).subscribe(console.log);