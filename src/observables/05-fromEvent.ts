// ==================================
// .FromEvent: crear observables con base a
//  un eventTarget.
// ==================================
import { fromEvent, Observer } from 'rxjs';

/**
 * eventos del DOM
 */
const scr1$ = fromEvent<MouseEvent>(document, 'click');
const scr2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('completado [obs]')
};


scr1$.subscribe(observer);
scr1$.subscribe(({ x, y }) => {
    console.log(x, y);
}); //forma destructurada

scr2$.subscribe(event => {
    console.log(event.key);
});
