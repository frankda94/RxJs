// ==================================
// DIFERENCIAS ENTRE AJAX- GETJSON
// ajax trae todo el objeto de la peticion
//  getJSON se enfoca en el response de la peticion
// ==================================
import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const manejoError = (resp: AjaxError) => {
    console.warn('error', resp.message);
    return of({})
}

// const obs$ = ajax.getJSON(url).pipe(catchError(manejoError));
// const obs2$ = ajax(url).pipe(catchError(manejoError));

const obs$ = ajax.getJSON(url).pipe(catchError(manejoError));
// const obs2$ = ajax(url).pipe(catchError(manejoError));
// obs2$.subscribe(data => console.log('ajax', data));
obs$.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error en subsc', err),
    complete: () => console.log('complete')
});