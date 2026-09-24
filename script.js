const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
const toast=document.getElementById("toast");
const enBtn=document.getElementById("enBtn");
const knBtn=document.getElementById("knBtn");
function setLanguage(lang){document.documentElement.lang=lang==="kn"?"kn":"en";document.querySelectorAll("[data-en][data-kn]").forEach(el=>{el.textContent=el.dataset[lang];});document.querySelectorAll(".en").forEach(el=>el.style.display=lang==="en"?"block":"none");document.querySelectorAll(".kn").forEach(el=>el.style.display=lang==="kn"?"block":"none");enBtn.classList.toggle("active",lang==="en");knBtn.classList.toggle("active",lang==="kn");localStorage.setItem("churchLanguage",lang);}
menuToggle.addEventListener("click",()=>{navLinks.classList.toggle("open");menuToggle.textContent=navLinks.classList.contains("open")?"✕":"☰";});
document.querySelectorAll("#navLinks a").forEach(link=>link.addEventListener("click",()=>{navLinks.classList.remove("open");menuToggle.textContent="☰";}));
enBtn.addEventListener("click",()=>setLanguage("en"));knBtn.addEventListener("click",()=>setLanguage("kn"));
document.querySelectorAll("[data-toast]").forEach(el=>el.addEventListener("click",e=>{if(el.tagName==="A"&&el.getAttribute("href")==="#")e.preventDefault();toast.textContent=el.dataset.toast;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600);}));
document.getElementById("year").textContent=new Date().getFullYear();
setLanguage(localStorage.getItem("churchLanguage")||"en");
