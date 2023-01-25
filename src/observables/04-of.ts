// ==================================
// of: Es una función  para crear observables 
// con base en un listado de elementos secuenciales
// de manera síncrona.
// ==================================
import { Observer, of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1,2,3,4,5,6]);
const obs$ = of<any>([1, 2], { a: 1, b: 2 }, () => { }, Promise.resolve);

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('completado [obs]')
};
// FORMA DE QUE LOS OBSERVABLES TRABAJAN DE MANERA SINCRONA
console.log("inicio del observable");
obs$.subscribe(observer);
console.log("fin del observable");
