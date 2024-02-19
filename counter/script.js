/*
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
*/
const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    styles = e.currentTarget.classList;
    //console.log(styles);
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
/*
decrease.addEventListener("click", function () {
  console.log("decrease");
  count--;
  value.textContent = count;
});
reset.addEventListener("click", function () {
  console.log("reset");
  value.textContent = 0;
});
increase.addEventListener("click", function () {
  console.log("increase");
  count++;
  value.textContent = count;
});
*/
