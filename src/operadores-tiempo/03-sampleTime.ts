// ============================================================
// sampleTime: emite el último parámetro 
// después de corrido el rango de tiempo pasado por parámetro. 
// ============================================================
import { fromEvent, map } from "rxjs";
import { sampleTime } from "rxjs/operators";



const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        sampleTime(1000),
        map(({ x, y }) => ({ x, y }))
    )
    .subscribe(console.log);