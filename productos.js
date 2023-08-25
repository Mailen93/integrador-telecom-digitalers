/* Librerias */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Archivos de proyecto*/
import "./css/style.css";
import { games } from "./utils/games";

const cart = []
/// HTML ELEMENTS ///

const newsContainer = document.getElementById("newsContainer");
const offersContainer = document.getElementById("offersContainer");
const allProductsContainer = document.getElementById("allProductsContainer");
const closeCartButton = document.getElementsByClassName("close-button")[0];
const cartOpener = document.getElementById("cart");

/// METHODS ///
const updateCartUI = () => {
  const cartItemsList = document.getElementById('cartItemsList')
  const cartTotal = document.getElementById('cartTotal')
  console.log(cartItemsList)
  console.log(cartTotal)

  cartItemsList.innerHTML = cart.map((product) => {
    return `<li>${product.name} - AR$ ${product.price}</li>`
  }).join("")

  const total = cart.reduce((acc, product) => acc + parseFloat(product.price), 0)
  cartTotal.textContent = total.toFixed(3)
}

const addToCart = (event) => {
  console.log('Agregue este producto')
  const productId = parseInt(event.target.dataset.product)
  const product = games.find((game) => game.id === productId)

  if(product){
    cart.push(product)
  }
  console.log(cart)
  updateCartUI()
}

const renderCards = () => {
  newsContainer.innerHTML = games
    .slice(0, 3)
    .map((game) => {
      return `<div class="card shadow-lg border-danger col-3 m-3">
            <img
              src="${game.image}"
              class="card-img-top w-75 object-fit-contain h-75 mx-auto my-0"
              alt="${game.name}"
            />
            <div class="card-body">
              <h5 class="card-title m-0">${game.name}</h5>
              <hr />
              <ul class="list-unestyled mt-3 mb-3 p-0">
                <li class="list-group-item d-flex align-center jugadores">
                  <i class="fa-solid fa-user fa-xl mt-2 mx-2" style="color: #22a699"></i>
                  <p class="m-0">
                    <b>${game.players}</b> (+${game.age} años)
                  </p>
                </li>
                <li class="list-group-item mx-1">
                  ${game.description}
                </li>
                <li class="list-group-item mx-1">AR$ ${game.price}</li>
              </ul>
              <a class="btn btn-card buy-button" data-product="${game.id}">
                Comprar
              </a>
              <a href="#" class="btn btn-dark">
                Ver Más
              </a>
            </div>
          </div>`;
    })
    .join("");

  offersContainer.innerHTML = games
    .slice(3, 6)
    .map((game) => {
      return `<div class="card shadow-lg border-danger col-3 m-3">
            <img
              src="${game.image}"
              class="card-img-top w-75 object-fit-contain h-75 mx-auto my-0"
              alt="${game.name}"
            />
            <div class="card-body">
              <h5 class="card-title m-0">${game.name}</h5>
              <hr />
              <ul class="list-unestyled mt-3 mb-3 p-0">
                <li class="list-group-item d-flex align-center jugadores">
                  <i class="fa-solid fa-user fa-xl mt-2 mx-2" style="color: #22a699"></i>
                  <p class="m-0">
                    <b>${game.players}</b> (+${game.age} años)
                  </p>
                </li>
                <li class="list-group-item mx-1">
                  ${game.description}
                </li>
                <li class="list-group-item mx-1">AR$ ${game.price}</li>
              </ul>
              <a class="btn btn-card buy-button" data-product="${game.id}">
                Comprar
              </a>
              <a  class="btn btn-dark">
                Ver Más
              </a>
            </div>
          </div>`;
    })
    .join("");
  allProductsContainer.innerHTML = games
    .map((game) => {
      return `<div class="card shadow-lg border-danger col-3 m-3">
    <img
      src="${game.image}"
      class="card-img-top w-75 object-fit-contain h-75 mx-auto my-0"
      alt="${game.name}"
    />
    <div class="card-body">
      <h5 class="card-title m-0">${game.name}</h5>
      <hr />
      <ul class="list-unestyled mt-3 mb-3 p-0">
        <li class="list-group-item d-flex align-center jugadores">
          <i class="fa-solid fa-user fa-xl mt-2 mx-2" style="color: #22a699"></i>
          <p class="m-0">
            <b>${game.players}</b> (+${game.age} años)
          </p>
        </li>
        <li class="list-group-item mx-1">
          ${game.description}
        </li>
        <li class="list-group-item mx-1">AR$ ${game.price}</li>
      </ul>
      <a class="btn btn-card buy-button" data-product="${game.id}">
        Comprar
      </a>
      <a  class="btn btn-dark">
        Ver Más
      </a>
    </div>
  </div>`;
    })
    .join("");

  const buyButtons = document.querySelectorAll('.buy-button')
  buyButtons.forEach((button) => {
    button.addEventListener('click', addToCart)
  })
};

const closeCartHandler = () => {
  closeCartButton.addEventListener("click", () => {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = "none";
    document.body.style.overflow = "auto";
  });
};

const openCartHandler = () => {
  cartOpener.addEventListener("click", () => {
    cartModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
};

renderCards();
closeCartHandler();
openCartHandler();
