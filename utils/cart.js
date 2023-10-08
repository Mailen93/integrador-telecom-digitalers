export const cart = JSON.parse(localStorage.getItem("cart")) || [];

// HTML ELEMENTS
const carrito = document.getElementById("cart");

const modalCarrito = document.getElementById("cartModal");

const iconoCierreCarrito = document.querySelector(".close-button");

const botonesComprar = document.querySelectorAll(".buy-button");

const botonVaciarCarrito = document.getElementById("vaciarCarritoButton");

// METHODS
const sumarProductosCarrito = () => {
  const localCartart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = localCartart.reduce((acc, game) => {
    return acc + game.price * game.units;
  }, 0);

  return total;
};

const actualizarCarritoUI = () => {
  const parsedCart = JSON.parse(localStorage.getItem("cart"));
  const cartItemList = document.getElementById("cartItemsList");
  const totalSpan = document.getElementById("cartTotal");

  if (parsedCart) {
    cartItemList.innerHTML = parsedCart.map(
      (game) => `<li class="cartProduct">
            <img src=${game.image} alt=${game.name} class="product-image-cart">
            <h3>${game.name}</h3>
            <p>$${game.price}</p>
            <p class='quantity'>Unidades: ${game.units}</p>
            <p class='subTotal'>Sub: $${game.units * game.price}</p>
          </li>`
    );
    totalSpan.innerHTML = sumarProductosCarrito();
  } else {
    cartItemList.innerHTML = `<span>No hay productos en el carrito</span>`;
  }

  if (!parsedCart || !parsedCart.length) {
    botonVaciarCarrito.style.display = "none";
  } else {
    botonVaciarCarrito.style.display = "block";
  }
};

const agregarProducto = (event) => {
  let parsedGames = JSON.parse(localStorage.getItem("games"));
  let buttonGameID = parseInt(event.target.dataset.game);
  let cartGames = JSON.parse(localStorage.getItem("cart")) || [];
  let game = parsedGames.find((game) => game.id === buttonGameID);
  let existingGame = cartGames.find((cartGame) => cartGame.id === buttonGameID)

  if (existingGame) {
    existingGame.units += 1
  } else {
    game.units = 1
    cartGames.push(game);
  }

  localStorage.setItem("cart", JSON.stringify(cartGames));
  actualizarCarritoUI();
};

const vaciarCarrito = () => {
  alert("Está seguro?");
  const emptyCart = [];
  localStorage.setItem("cart", JSON.stringify(emptyCart));
  actualizarCarritoUI();
};

const abrirModal = () => {
  modalCarrito.style.display = "block";
  document.body.style.overflow = "hidden";

  const localCart = JSON.parse(localStorage.getItem("cart"));
  if (!localCart || !localCart.length) {
    botonVaciarCarrito.style.display = "none";
  } else {
    botonVaciarCarrito.style.display = "block";
  }
};

const cerrarModal = () => {
  modalCarrito.style.display = "none";
  document.body.style.overflow = "auto";
};

const agregarEventosaBotones = () => {
  botonesComprar.forEach((boton) =>
    boton.addEventListener("click", agregarProducto)
  );
  botonVaciarCarrito.addEventListener("click", vaciarCarrito);
};

// EVENTS
carrito.addEventListener("click", abrirModal);
iconoCierreCarrito.addEventListener("click", cerrarModal);
agregarEventosaBotones();
actualizarCarritoUI();
