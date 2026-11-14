const btn = document.getElementById("btn");
const message = document.getElementById("message");

let count = 0;

btn.addEventListener("click", function () {
  count = count + 1;

  if (count >= 5) {
    message.textContent = "برافو! دوست " + count + " مرات 🎉";
  } else {
    message.textContent = "دوست " + count + " مرة";
  }
});