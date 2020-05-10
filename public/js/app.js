import { adder } from "./adder.js";

// I'd use a react.js, but I didnt't want to overreact :)
const formElem = document.getElementById("inputs-form");
const inputElemOne = document.getElementById("input-one");
const inputElemTwo = document.getElementById("input-two");
const resultElem = document.getElementById("result");
const prettyPrint = document.getElementById("pretty-print");
const resultBox = document.getElementById("result-box");

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  resultBox.style.display = "block";

  // I know that "eval" i evil ;) - it's only for user interface presentation
  const result = adder(eval(inputElemOne.value), eval(inputElemTwo.value));
  resultElem.textContent = JSON.stringify(result, null, 4);

  prettyPrint.innerHTML = result
    .map((term, index, expression) => {
      const constant = term[0];
      const exponential = term[1];

      return `<span>${constant > 1 ? constant : ""}${
        exponential >= 1 || exponential < 0 ? "x" : ""
      }<sup>${
        (exponential && exponential > 1) || (exponential && exponential < 0)
          ? exponential
          : ""
      }</sup>${index !== expression.length - 1 ? "+" : ""}</span>`;
    })
    .join(" ");
});

formElem.addEventListener("input", () => {
  resultBox.style.display = "none";
});
