/* Librerias */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Archivos de proyecto*/
import "./css/style.css";
import { games } from "./utils/games";
import { values } from "./utils/values";

const cardsContainer = document.getElementById("cardsContainer");
const valuesWrapper = document.getElementById("valuesWrapper");

const renderCards = () => {
  console.log(valuesWrapper)
  console.log(values)
  cardsContainer.innerHTML = games
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
              <a href="#" class="btn btn-card">
                Comprar
              </a>
              <a href="#" class="btn btn-dark">
                Ver Más
              </a>
            </div>
          </div>`;
    })
    .join("");
};

const renderValues = () => {
  valuesWrapper.innerHTML = values
    .map((value) => {
      return `<div class="value">
        <i class="${value.icon}"></i>
        <h3 class="valueTitle">${value.title}</h3>
        <p class="valueText">${value.description}</p>
      </div>`;
    })
    .join("");
};

renderCards();
renderValues();
