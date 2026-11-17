const quotes = [
  "ابدأ من حيث أنت، واستخدم ما عندك.",
  "الاستمرار أهم من الحماس.",
  "كل مبرمج محترف كان مبتدئ في يوم من الأيام.",
  "الغلط جزء من التعلم، مش دليل على الفشل.",
  "خطوة صغيرة كل يوم أحسن من قفزة مرة في السنة.",
];

const quoteEl = document.getElementById("quote");
const btn = document.getElementById("newQuote");

btn.addEventListener("click", function () {
  const index = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[index];
});