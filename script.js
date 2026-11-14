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

const skills = ["HTML", "CSS", "JavaScript"];
const list = document.getElementById("skills");

for (let i = 0; i < skills.length; i++) {
  const item = document.createElement("li");
  item.textContent = skills[i];
  list.appendChild(item);
}

const projects = [
  { title: "الصفحة الأولى", description: "أول صفحة HTML كتبتها." },
  { title: "Portfolio", description: "الصفحة اللي بتشوفها دلوقتي." },
  { title: "عدّاد الضغطات", description: "أول مشروع JavaScript." },
    { title: "ال دياب للسيارت", description: "مركز سيارت " },
];

function createCard(project) {
  const card = document.createElement("div");
  card.className = "card";

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