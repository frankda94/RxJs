import { endWith, of, startWith } from "rxjs";


const numeros$ = of(1, 2, 3);


numeros$
    .pipe(
        startWith(0)
    )
    .subscribe(console.log)


numeros$
    .pipe(
        startWith(100),
        endWith('a', 'b', 'c')
    )
    .subscribe(console.log)