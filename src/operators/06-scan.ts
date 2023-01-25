// ======================================================
// aplica una función acumuladora a las emisiones 
//producidas por el observable,
//retorna una por una cada emisión con el valor acumulado
// =======================================================

import { from, map } from "rxjs";
import { scan } from "rxjs/operators";


const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulador: number, valorActual: number) => acumulador + valorActual;

from(numbers).pipe(
    scan(totalAcumulador)
).subscribe(console.log);

//redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'frank', autenticado: false, token: null },
    { id: 'frank', autenticado: true, token: 'ABC' },
    { id: 'frank', autenticado: true, token: 'ABC123' },
]

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    },),
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);