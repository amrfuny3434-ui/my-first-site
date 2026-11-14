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