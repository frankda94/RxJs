import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-Token': 'ABC1234'
});

obs$
    .pipe()
    .subscribe(data => console.log('data', data));