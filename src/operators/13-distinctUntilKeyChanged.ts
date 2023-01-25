// ==================================
//  distinctUntilKeyChanged: emite los valores 
// siempre y cuando sea diferente a la propiedad (key)
//  pasada por parámetro.
// ==================================
import { distinctUntilKeyChanged, from } from "rxjs";


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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log);