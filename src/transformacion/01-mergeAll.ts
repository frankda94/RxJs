// ============================================
// maneja internamente las subscripciones
//  emitidas hasta completar cada una
// ===========================================
import { fromEvent, debounceTime, map, mergeAll, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    map<KeyboardEvent, Observable<any>>(({ target }) => ajax.getJSON(`https://api.github.com/search/users?q=${target['value']}`)),
    mergeAll(),
    map((x: any) => x?.items)
).subscribe(console.log);