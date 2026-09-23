const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("churchLanguage") || "en";

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === "kn" ? "kn" : "en";

  document.querySelectorAll("[data-en][data-kn]").forEach(el => {
    el.textContent = el.dataset[lang];
  });

  languageToggle.textContent = lang === "en" ? "ಕನ್ನಡ" : "English";
  localStorage.setItem("churchLanguage", lang);
}

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.textContent = mainNav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "kn" : "en");
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(currentLanguage);
