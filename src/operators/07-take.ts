// =============================================
// emite la cantidad de flujos del observable
// pasada por parámetro y en seguida llama el
// complete del observable.
// ============================================
import { of, take, tap } from "rxjs";


const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap(number => console.log('tap ', number)),
    take(3),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})