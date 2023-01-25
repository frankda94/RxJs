// ==================================
// map: transforma lo recibido por el observable.
// ==================================

import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1, 5).pipe(
    map<number, number>(val => val * 10)
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// ==================================
// 1. forma desestructurada
// ==================================
// keyup$.subscribe(({ code }) => console.log('map', code));

// ==================================
// 2. forma con map
// ==================================
// const keyupCode$ = keyup$.pipe(
//     map(val => val.code)
// )
// keyupCode$.subscribe(code => console.log('map', code));
// ==================================
// mapTo (desuso), por ello se usa map
// ==================================
const keyupMapTo = keyup$.pipe(
    map(() => 1)
);
keyupMapTo.subscribe(code => console.log('mapTo ', code))


