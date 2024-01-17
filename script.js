//1 Añadimos el elemento padre
const elementoPadre = document.querySelector('.contenedorParrafos');
const parrafo3 = document.querySelector('#parrafo3');


//2 Creamos el elemnto que queremos
const parrafoEntre2y3 = document.createElement('p');
parrafoEntre2y3.textContent = 'Soy un parrafo entre el 2 y el 3 gracias a insert before'
const parrafoBeforeBeging = document.createElement('p');
parrafoBeforeBeging.textContent = 'Estoy antes del primer elemento(fuera del div)';
const parrafo0 = document.createElement('p');


//insertBefore, para añadir el elemento detras de otro, se suele usar para añadirlo en una posición específica
elementoPadre.insertBefore(parrafoEntre2y3, parrafo3);

// insertAdjancentElement
// beforebeging = antes del primer seleccionado
// afterebeging = despues del del primer elemento seleccionado
// beforeend = antes del ultimo elemento
// afterend = despues del último elemento
elementoPadre.insertAdjacentElement("beforebegin",parrafoBeforeBeging)

