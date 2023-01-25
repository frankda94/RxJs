// ==================================
// Range: emite una secuencia de números 
//con base en un rango. Por defecto son síncronos, 
// pero se pueden convertir en asincronos.
// ==================================
import { asyncScheduler, of, range } from 'rxjs';

// ==================================
// SINCRONO
// ==================================
// const scr$ = of(1, 2, 3, 4, 5);
// const scr$ = range(-5, 10);
const scr$ = range(1, 5);

console.log('inicio');
scr$.subscribe(console.log);
console.log('fin');


// ==================================
// ASINCRONO
// ==================================
// const scr$ = of(1, 2, 3, 4, 5);
// const scr$ = range(-5, 10);
const scr2$ = range(1, 5, asyncScheduler);

console.log('inicio');
scr2$.subscribe(console.log);
console.log('fin');
