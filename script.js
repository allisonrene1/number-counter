"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const clickButton = document.getElementById("increase");
  const counterElement = document.querySelector(".textNumber");
  let number = 0;

  // CONDITION ONE - INCREASE THE NUMBER BY ONE //
  document.querySelector(".increase").addEventListener("click", function () {
    if (number < 50) {
      number++;
      document.querySelector(".textNumber").textContent = number;
    } else {
      clickButton.disabled = true;
    }
  });
  // CONDITION TWO - DECREASE THE NUMBER BY ONE //
  document.querySelector(".decrease").addEventListener("click", function () {
    if (number > -50) {
      number--;
      document.querySelector(".textNumber").textContent = number;
    } else {
      clickButton.disabled = true;
    }
  });
  // CONDITION THREE - CHANGE THE COLOR OF NUMBER FOR NEGATIVE INTEGERS //
  document.querySelector(".decrease").addEventListener("click", function () {
    if (number < 0) {
      counterElement.style.color = "red";
    } else if (number > 0) {
      counterElement.style.color = "orangered";
    }
  });
  document.querySelector(".increase").addEventListener("click", function () {
    if (number >= 0) {
      counterElement.style.color = "orangered";
    }
  });

  // CONDITION FOUR - RESET TO INITIAL CONDITION //

  document.querySelector(".reset").addEventListener("click", function () {
    number = 0;
    document.querySelector(".textNumber").textContent = number;
  });
});
