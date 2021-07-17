//Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaJuegos = document.querySelector('#lista-juegos');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un juego presionando "Agregar al Carrito"
    listaJuegos.addEventListener('click',agregarJuego)

    //Eliminar juego del carrito

    carrito.addEventListener('click', eliminarJuego)

    //Vaciar carrito

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    })

}

//Funciones

function agregarJuego(e) {
    e.preventDefault(); //como no tenemos enlaces prevenimos que vaya al id
    if(e.target.classList.contains('agregar-carrito')){
        const juegoSeleccionado =  e.target.parentElement.parentElement;
        leerDatosJuego(juegoSeleccionado);
    };  
}

//Eliminar curso del carrito

function eliminarJuego(e) {
    
    if(e.target.classList.contains("borrar-juego")){
        const juegoId = e.target.getAttribute("data-id");

        //Eliminar juego mediante el data-id
        articulosCarrito = articulosCarrito.filter(juego => juego.id !== juegoId);

        console.log(articulosCarrito);

        carritoHTML(); //invoco de nuevo al carrito para mostrar e iterar

    }
}

//Lee el contenido del HTML al que le demos click y extrae la informacion del juego

function leerDatosJuego(juego) {
    
    //console.log(juego);

    //Crear un objeto con el contenido del juego actual

    const infoJuego = {
        imagen: juego.querySelector('img').src,
        titulo: juego.querySelector('h4').textContent,
        precio: juego.querySelector('.precio span').textContent,
        id: juego.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    console.log(infoJuego);

    //Revisa si un elemento ya existe en el carrito

    const existe = articulosCarrito.some(juego => juego.id === infoJuego.id);

    if(existe){
        // Actualizamos Cantidad
        const juegos = articulosCarrito.map(juego=>{

            if(juego.id === infoJuego.id){
                juego.cantidad++;
                return juego; //Retorna objeto actualizado
            }
            else{
                return juego; //Retorna objetos no duplicados
            }
        });

        articulosCarrito=[...juegos];

    }

    else{
        //Agregar elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoJuego];
    }

    console.log(articulosCarrito);

    carritoHTML();
    
}


//Muestra el carrito de compras en el HTML 

function carritoHTML(){

    //Limpiar el HTML

    limpiarHTML();

    //Recorre el carrito y genera HTML
    articulosCarrito.forEach( juego =>{
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>

          <img src="${juego.imagen}" width="50">

        </td>

        <td> ${juego.titulo} </td>

        <td> ${juego.precio} </td>

        <td>${juego.cantidad}</td>

        <td>
            <a href="#" class="borrar-juego" data-id="${juego.id}">X</a>
        </td>
        
        `;

        //Agrega el HTML del carrito en el tbody

        contenedorCarrito.appendChild(row);
    })
}

//Elimina los juegos del tbody

function limpiarHTML(){

    //Forma lenta
    /* contenedorCarrito.innerHTML = ''; */

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

