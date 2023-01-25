// ====================================================
// debounceTime: con base en un evento, espera el tiempo
//  pasado por parámetro y emite el flujo de información.
// ====================================================
import { debounceTime, fromEvent, distinctUntilChanged } from 'rxjs';
import { pluck } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

// click$
//     .pipe(
//         debounceTime(1000)
//     )
//     .subscribe(console.log
//     );


const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);
