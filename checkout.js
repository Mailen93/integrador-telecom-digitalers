/* Librerias */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Archivos de proyecto*/
import "./css/style.css";
import Swal from "sweetalert2";
const checkOut = document.getElementById("checkoutCard")
const subTotal = document.getElementById('subtotal')
const total = document.getElementById('total')
const checkOutUnidades = document.getElementById("checkOutUnidades")

const renderCheckOut = () => {
const cart = JSON.parse(localStorage.getItem("cart"));
if (!cart || cart.length === 0) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Tu carrito está vacío!',
  })
  setTimeout(() => {
    window.location.href = "./productos.html";
  }, 2000)
}
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
        <p><b>Cantidad: ${game.units}</b></p>
        <div class="">
                <p></p>
                <div>
                  <button class="add" data-units=${game.id}>+</button>
                  <button class="less" data-units=${game.id}>-</button>
                </div>
              </div>
      </div>
    </div>
    <hr />`;
    })
    .join("");

    const addButtons = document.querySelectorAll('.add')
    addButtons.forEach(button => button.addEventListener('click', addUnits))

    const lessButtons = document.querySelectorAll('.less')
    lessButtons.forEach(button => button.addEventListener('click', removeUnits))

    agregarEventos()
    subTotal.innerHTML = sumarTotalCheckout().subTotal
    total.innerHTML = sumarTotalCheckout().total
    checkOutUnidades.innerHTML = sumarTotalCheckout().cantidadProductos
};
const eliminarProducto = (event) => {
  const localCart = JSON.parse(localStorage.getItem('cart'))
  const deleteButtonID = event.target.dataset.game
  const gameIndex = localCart.findIndex(localGame => localGame.id === parseInt(deleteButtonID))

  Swal.fire({
    title: '¿Desea eliminar el producto?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirm'
  }).then((result) => {
    if (result.isConfirmed) {
      localCart.splice(gameIndex, 1)
      localStorage.setItem('cart', JSON.stringify(localCart))
      renderCheckOut()
      Swal.fire(
        'Eliminado!',
        'El producto ha sido eliminado exitosamente',
        'success'
      )
    }
  })
}
const addUnits = (event) => {
  const addGameId = event.target.dataset.units;
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const gameIndex = localCart.findIndex(
    (localGame) => localGame.id === parseInt(addGameId)
  );

  localCart[gameIndex].units += 1;
  localStorage.setItem("cart", JSON.stringify(localCart));

  renderCheckOut()
};

const removeUnits = (event) => {
  const removeGameId = event.target.dataset.units;
  const localCart = JSON.parse(localStorage.getItem("cart"));
  const gameIndex = localCart.findIndex(
    (localGame) => localGame.id === parseInt(removeGameId)
  );
  if(localCart[gameIndex].units === 1) {
    localCart[gameIndex].units = 0
    localCart.splice(gameIndex, 1)
  } else {
    localCart[gameIndex].units -= 1;
  }
  localStorage.setItem("cart", JSON.stringify(localCart));
    renderCheckOut();
};

const agregarEventos = () => {
  const botonesEliminar = document.querySelectorAll('.eliminar')
  botonesEliminar.forEach(boton => boton.addEventListener('click', eliminarProducto))
}

const sumarTotalCheckout = () => {
  const localCartart = JSON.parse(localStorage.getItem("cart")) || [];
  const subTotal = localCartart.reduce((acc, game) => {
    return acc + game.price * game.units;
  }, 0);
  const total = subTotal * 1.21
  const cantidadProductos = localCartart.reduce((acc, game) => {
    return acc + game.units
  }, 0)

  return {subTotal, total, cantidadProductos};
};

renderCheckOut();
agregarEventos()
