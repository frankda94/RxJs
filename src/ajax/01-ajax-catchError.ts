
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

// const fetchPromesa = fetch(url);
// fetchPromesa.then(console.log).catch();

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err);
    return of([]); //retorna el valor de lo que tomaran los users
}

ajax(url)
    .pipe(
        map(resp => resp.response),
        catchError(atrapaError)
    )
    .subscribe(users => console.log('usuarios ', users));