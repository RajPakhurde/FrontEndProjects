"use strict";

const thankyou = document.querySelector(".first-page1");

const submitbtn = document.querySelector(".subtn");
const select = document.querySelector(".select");
let rating;

// document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".rateNo").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll(".rateNo").forEach(function (ratingcircle) {
      if (button === ratingcircle) {
        ratingcircle.classList.add("submit-clicked");
      } else {
        ratingcircle.classList.remove("submit-cliked");
      }
    });
    rating = Number(button.textContent);
  });
});
// });
submitbtn.addEventListener("click", () => {
  if (!rating) {
    alert("Please select the rating");
  } else {
    document.querySelector(".first-page").classList.add("hidden");
    document.querySelector(".first-page1").classList.remove("hidden");

    document.querySelector(
      "#select"
    ).textContent = `You selected ${rating} out of 5`;
  }
});
