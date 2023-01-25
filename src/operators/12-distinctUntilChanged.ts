// ==================================
//  distinctUntilChanged: emite los valores
//  siempre y cuando sea diferente al último emitido. 
// ==================================
import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1, 1, 1, 2, 3, 4, 5, 6, 6, 7, 1);

numeros$.
    pipe(distinctUntilChanged())
    .subscribe(console.log)


interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'megaman'
    },
    {
        nombre: 'megaman'
    },
    {
        nombre: 'superman'
    },
    {
        nombre: 'batman'
    },
    {
        nombre: 'megaman'
    },

]

from(personajes)
    .pipe(
        distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
    )
    .subscribe(console.log);