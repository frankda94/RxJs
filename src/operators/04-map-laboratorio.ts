import { fromEvent, map, tap } from 'rxjs';


const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed vestibulum nibh, non aliquam arcu. Morbi efficitur, sapien at ultricies condimentum, nunc ex efficitur dolor, id aliquam lorem odio et quam. Fusce et hendrerit metus. Aliquam et vehicula felis. Sed libero tortor, fringilla eget metus ut, lobortis elementum lorem. Maecenas vehicula mattis diam, vel vestibulum enim. Duis placerat nulla lorem, a accumsan ipsum imperdiet ut. Sed tincidunt lacus vel tortor molestie tristique. Fusce pharetra interdum dictum. Vestibulum in ante rutrum, egestas dui non, porttitor enim. Suspendisse eu lectus non purus condimentum vehicula.
<br></br>
Donec facilisis sollicitudin placerat. Vivamus dolor neque, luctus vitae rutrum et, mattis nec dui. Integer convallis sodales enim, in suscipit metus luctus non. Morbi condimentum felis id quam placerat feugiat. Proin eu interdum arcu. Sed dapibus felis libero, nec rhoncus arcu ornare ut. Aenean nisl nunc, condimentum ac ligula et, rhoncus consequat quam. Nullam porttitor nisi ligula, a commodo tellus ullamcorper eget. Aliquam id sapien sed purus sollicitudin elementum condimentum sit amet massa. Sed vitae consectetur nisi. Ut tincidunt lorem vel faucibus convallis.
<br></br>
Ut eu feugiat urna, sit amet rhoncus massa. Suspendisse ornare augue sem, et vehicula purus pellentesque at. Maecenas volutpat, felis et ultricies hendrerit, risus lacus commodo eros, ac auctor ligula dui sit amet mi. Phasellus id iaculis lectus, sed laoreet est. Nam egestas laoreet augue congue iaculis. Nam non lacus augue. Aenean porttitor nunc quis feugiat dignissim. Duis bibendum ligula finibus hendrerit facilisis. Curabitur odio enim, fermentum vel metus pretium, luctus facilisis dui. Nullam eleifend tellus sit amet nisi pulvinar, ut luctus lorem faucibus.
<br></br>
Donec molestie mollis massa a finibus. Nam quis eleifend velit. Proin ut posuere lorem, vitae porttitor felis. Vivamus at convallis arcu. Quisque euismod vestibulum lorem, vitae ullamcorper enim pretium vel. Donec tempor eu est in feugiat. Praesent posuere, nulla non finibus pulvinar, diam mauris maximus massa, accumsan maximus nisl magna in erat. Mauris ullamcorper diam sed nibh pharetra, a ornare dui pretium. Mauris id tortor ultrices, pharetra quam ac, volutpat diam.
<br></br>
Nulla a hendrerit dolor, eget elementum magna. Donec sed nisl eget dui rutrum commodo sit amet in turpis. Mauris vulputate gravida eros, id sagittis augue accumsan id. Aliquam magna mi, tristique nec egestas in, dictum sit amet erat. Sed quis mi in libero egestas molestie ac tempor lorem. Suspendisse a iaculis sem. Aliquam sagittis nunc sit amet fringilla rutrum. Sed vehicula est dolor, id bibendum metus condimentum vel. Sed porta, magna sed imperdiet porta, lectus nulla laoreet tortor, ac maximus eros justo non eros. In molestie iaculis eleifend. Sed molestie, leo et dignissim congue, justo leo sollicitudin leo, in vulputate eros velit eu mi. Aenean tempor ex ac risus aliquet, eu gravida ipsum pellentesque. Nullam at orci lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean augue mauris, bibendum nec nulla volutpat, efficitur luctus mauris. Fusce non tincidunt risus.
`;

const body = document.querySelector('body');
body.append(text);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const calcularPorcentajeScroll = (event) => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;

}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
)

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})
