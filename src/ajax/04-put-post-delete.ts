import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.get(url, {})
// ==================================
// POST
// ==================================
// ajax.post(url, {
//     id: 1,
//     nombre: 'Frank'
// },
//     { 'mi-token': 'ABC1234' }
// ).subscribe(console.log);
// ==================================
// configuracion personalizada
// ==================================
ajax({
    url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Juan'
    }
}).subscribe(console.log);