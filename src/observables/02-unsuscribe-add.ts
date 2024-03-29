import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.log('completado [obs]')
};

const invervalo$ = new Observable<number>(subscriber => {

    let count = 0;

    const interval = setInterval(() => {
        subscriber.next(count++);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('intervalo terminado');

    }
})

const subs1 = invervalo$.subscribe(observer);
const subs2 = invervalo$.subscribe(observer);
const subs3 = invervalo$.subscribe(observer);

subs1.add(subs2);
subs2.add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('completado timeout');
}, 6000);