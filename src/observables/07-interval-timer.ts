// ==================================
// Interval: emite intervalos asíncronos secuenciales.
// ==================================

import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
}

const interval$ = interval(1000);
// interval$.subscribe(observer);


// const timer$ = timer(2000); //en 2 seg emite el valor
// console.log('inicio');
// timer$.subscribe(observer);
// console.log('fin');

// ==================================
// DATE
// ==================================
const hoyEn5Seg = new Date();
hoyEn5Seg.setSeconds(hoyEn5Seg.getSeconds() + 5);
const timer$ = timer(hoyEn5Seg);
console.log('inicio');
timer$.subscribe(observer);
console.log('fin');


