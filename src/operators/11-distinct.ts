// ============================================
// distinct: compara los valores emitidos
//  y solo deja pasar los que sean distintos.
// ==========================================
import { distinct, from, of } from "rxjs";


const numeros$ = of(1, 1, 1, 2, 3, 4, 5, 6, 6, 7, 1);

numeros$.
    pipe(distinct())
    .subscribe(console.log)


interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
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
        distinct(p => p.nombre)
    )
    .subscribe(console.log);