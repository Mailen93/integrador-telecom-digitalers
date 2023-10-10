/* Librerias */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Archivos de proyecto*/
import "./css/style.css";
// import { cart } from "./utils/cart";
import { games } from "./utils/games";

const checkOut = document.getElementById("checkoutCard");
const cart = JSON.parse(localStorage.getItem("cart"));

const renderCheckOut = () => {
  checkOut.innerHTML = cart
    .map((game) => {
      return `
      <div class="row  py-3 mb-3">
      <div class="col-3 mb-1">
        <!-- imagen -->
        <div class="bg-image rounded">
          <img
            class="w-100"
            src=${game.image}
            alt=${game.name}
          />
        </div>
      </div>
      <div class="col-5">
        <p><strong>${game.name}</strong></p>
        <p>${game.description}
        </p>
        <p>$ ${game.price}</p>
        <button
          type="button"
          class="eliminar btn btn-danger btn-sm me-1 mb-2"
          data-game=${game.id}
        >
          <i class="fa-solid fa-trash-can"></i> ELIMINAR
        </button>
      </div>
      <div class="col-3">
        <p><b>Cantidad:</b></p>
        <input
          type="number"
          class="form-control"
          placeholder="cantidad"
          value="1"
        />
      </div>
    </div>
    <hr />`;
    })
    .join("");
};

const eliminarProducto = (event) => {
  const localCart = JSON.parse(localStorage.getItem('cart'))
  const deleteButtonID = event.target.dataset.game
  const gameIndex = localCart.findIndex(localGame => localGame.id === parseInt(deleteButtonID))

  console.log(localCart);

  localCart.slice(gameIndex, 1)
  localStorage.setItem('cart', JSON.stringify(localCart))
  console.log(localCart);
}

const actualizarCheckOutUI = () => {

}

const agregarEventos = () => {
  const botonesEliminar = document.querySelectorAll('.eliminar')
  botonesEliminar.forEach(boton => boton.addEventListener('click', eliminarProducto))
}
renderCheckOut();
agregarEventos()
