const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const toast = document.getElementById("toast");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.textContent = open ? "✕" : "☰";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

document.querySelectorAll("[data-toast]").forEach(el => {
  el.addEventListener("click", e => {
    if (el.tagName === "A") e.preventDefault();
    showToast(el.dataset.toast);
  });
});

document.getElementById("youtubeBtn")?.addEventListener("click", () => {
  // Replace this URL with your real PETER AG CHURCH YouTube channel/live URL.
  window.open("https://www.youtube.com/", "_blank", "noopener");
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, {rootMargin:"-35% 0px -55% 0px", threshold:0});
sections.forEach(section => observer.observe(section));
