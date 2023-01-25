// ======================================================
// en un flujo de dos emisiones combina
// el ultimo valor emitido con la salida del siguiente 
// =========================================================
import { combineLatest, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';


// ==================================
// EJER1
// ==================================
// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest([keyup$, click$])
//     .pipe(
//     // map((key, click) => (`${key} ${click}`))
// )
//     .subscribe(console.log)

// ==================================
// EJER2
// ==================================
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');

inputEmail.placeholder = 'Email';
inputPass.placeholder = 'password';

document.querySelector('body').append(inputEmail, inputPass);

//Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map(({ target }: any) => target?.value),
    )
}

combineLatest([
    getInputStream(inputEmail),
    getInputStream(inputPass)
]).subscribe(console.log)

