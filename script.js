const roles = ["Web Developer", "Java Programmer", "AI Content Creator"];
let roleIndex = 0;
const typed = document.getElementById("typedText");
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  typed.textContent = roles[roleIndex];
}, 2200);

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("navLinks").classList.remove("open"));
});
document.getElementById("year").textContent = new Date().getFullYear();
