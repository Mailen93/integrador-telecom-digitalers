/* Librerias */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Archivos de proyecto*/
import "./css/style.css";
// import { cart } from "./utils/cart";
import { games } from "./utils/games";


const checkOut = document.getElementById("checkoutCard");

const renderCheckOut = () => {
  checkOut.innerHTML = games.slice(0,3)
    .map((item) => {
      return `
      <div class="row  py-3 mb-3">
      <div class="col-3 mb-1">
        <!-- imagen -->
        <div class="bg-image rounded">
          <img
            class="w-100"
            src="/public/img/games/ni-en-pedo.jpg"
            alt="Notebook"
          />
        </div>
      </div>
      <div class="col-5">
        <p><strong>Ni en Pedo</strong></p>
        <p>
          Colocá el mazo en la mesa, saca una carta y ¡que comience
          el juego! Si no hacés lo que dice, como castigo, tomás
          unos tragos!!!
        </p>
        <p>$5.800</p>
        <button
          type="button"
          class="btn btn-danger btn-sm me-1 mb-2"
        >
          <i class="fa-solid fa-trash-can"></i> ELIMINAR
        </button>
      </div>
      <div class="col-3">
        <p><b>Cantidad:</b></p>
        <input
          type="text"
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
renderCheckOut();
