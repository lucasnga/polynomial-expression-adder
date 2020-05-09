import { adder } from "./adder.js";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const formElem = document.getElementById("inputs-form");
    const inputElemOne = document.getElementById("input-one");
    const inputElemTwo = document.getElementById("input-two");
    const resultElem = document.getElementById("result");

    formElem.addEventListener("submit", (e) => {
      e.preventDefault();

      resultElem.textContent = JSON.stringify(adder(
        eval(inputElemOne.value),
        eval(inputElemTwo.value)
      ), null, 4);
    });

    formElem.addEventListener("input", () => {});
  },
  false
);
