import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('completado [obs]')
};


// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // const a = undefined; //forzar error
    // a.nombre = 'Francis ';

    subs.complete(); //finaliza la emisión de datos
    subs.next('Hola Mundo_final'); //no se ejecuta
});

// obs$.subscribe(res => console.log(res)); //tradicional forma

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// ) //segunda forma


obs$.subscribe(observer);




