// ===============================================
// mantiene una única salida del observable,
//  por tanto si existen más emisiones, cancela 
//  las anteriores para mantener la última emisión. 
// ===============================================
import { mergeMap, map, fromEvent, debounceTime, Observable, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// ==================================
// SWITCHMAP
// ==================================
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    mergeMap<KeyboardEvent, Observable<any>>(({ target }) => ajax.getJSON(`https://api.github.com/search/users?q=${target['value']}`)),
    map((x: any) => x?.items)
).subscribe(console.log)

const url = 'https://httpbin.org/delay/1?arg='

input$.pipe(
    // pluck('target', 'value'),
    switchMap((target: any) => ajax.getJSON(url + target.value))
).subscribe(console.log);
