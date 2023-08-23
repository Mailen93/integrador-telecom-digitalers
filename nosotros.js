/* Librerias */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/* Archivos de proyecto*/
import "./css/style.css";
import { values } from "./utils/values";

const valuesWrapper = document.getElementById("valuesWrapper");

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

renderValues();
