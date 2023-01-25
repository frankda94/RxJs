import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('completado [obs]')
};

const intervalo$ = new Observable<number>(sub => {
    const intervalID = setInterval(() => {
        sub.next(Math.random())
    }, 1000);
    return () => {
        clearInterval(intervalID);
        console.log("intervalo destruido");

    }
});

// const subs1 = intervalo$.subscribe(rnd => console.log("sub1 ", rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log("sub2 ", rnd));

/**
 * Caracteristicas subject
 * 1- casteo múltiple (envio de la misma info a varias susbscripciones )
 * 2- es un observer
 * 3- next-error-complete
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const subs1 = subject$.subscribe(rnd => console.log("sub1 ", rnd));
// const subs2 = subject$.subscribe(rnd => console.log("sub2 ", rnd));
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);