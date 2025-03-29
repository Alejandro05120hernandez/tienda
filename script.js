let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    let totalSpan = document.getElementById("totalCarrito");
    lista.innerHTML = "";
    
    carrito.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
    });

    totalSpan.textContent = total;
}

function pagarCarrito() {
    alert(`Total a pagar: $${total}`);
    carrito = [];
    total = 0;
    actualizarCarrito();
}

function ingresar() {
    let nombre = document.getElementById("nombreUsuario").value;
    if (nombre) {
        localStorage.setItem("usuario", nombre);
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let usuario = localStorage.getItem("usuario");
    if (usuario) {
        document.getElementById("usuarioBienvenida").textContent = `Hola, ${usuario}!`;
    }
});
