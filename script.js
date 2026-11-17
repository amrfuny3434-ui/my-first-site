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

const skills = ["HTML", "CSS", "JavaScript", "Git", "APIs"];
const list = document.getElementById("skills");

for (let i = 0; i < skills.length; i++) {
  const item = document.createElement("li");
  item.textContent = skills[i];
  list.appendChild(item);
}

const projects = [
  { title: "آلة حاسبة", description: "جمع رقمين بـ JavaScript.", link: "calculator.html" },
  { title: "قائمة المهام", description: "إضافة ومسح مهام، وبتتحفظ في المتصفح.", link: "todo.html" },
  { title: "مولّد اقتباسات", description: "اقتباس عشوائي في كل ضغطة.", link: "quotes.html" },
  { title: "الطقس", description: "بيانات حقيقية من API.", link: "weather.html" },
];

function createCard(project) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = project.link;

  const title = document.createElement("h3");
  title.textContent = project.title;

  const desc = document.createElement("p");
  desc.textContent = project.description;

  card.appendChild(title);
  card.appendChild(desc);
  return card;
}

const cardsContainer = document.getElementById("projects");

for (let i = 0; i < projects.length; i++) {
  cardsContainer.appendChild(createCard(projects[i]));
}