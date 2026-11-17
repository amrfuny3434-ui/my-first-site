const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumBtn = document.getElementById("sumBtn");
const result = document.getElementById("result");

sumBtn.addEventListener("click", function () {
  const a = Number(num1.value);
  const b = Number(num2.value);

  result.textContent = "الناتج: " + (a + b);
});