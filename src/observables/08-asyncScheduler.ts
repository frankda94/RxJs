import { asyncScheduler } from 'rxjs';

// ==================================
// setTimeout (like timer) with asyncScheduler
// ==================================
const saludar = () => console.log("hola a todos");
const saludar2 = persona => console.log(`hola ${persona.nombre}, ${persona.apellido}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000,  {nombre: 'juan', apellido: 'ramirez'});


// ======================================================
// setInterval with asyncScheduler
//(emite valores periodicamente en lapsos de tiempo)
// =======================================================
const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);

    this.schedule(state + 1, 1000);
}, 2000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 5000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
