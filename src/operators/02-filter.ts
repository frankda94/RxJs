import { from, range, of, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/**
 * filtrar numeros pares
 */
// range(1, 10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(console.log);

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

from(personajes).pipe(
    filter(h => h.tipo == 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(code => code == 'Enter')
);


keyup$.subscribe(console.log);