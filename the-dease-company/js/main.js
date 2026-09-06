(function loadMobileStyles() {
  if (document.querySelector('link[href="css/mobile.css"]')) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "css/mobile.css";
  document.head.appendChild(link);
})();

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

function setMenu(open) {
  if (!btn || !nav) return;
  nav.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", open ? "true" : "false");
  btn.textContent = open ? "Close" : "Menu";
  document.body.style.overflow = open ? "hidden" : "";
}

if (btn && nav) {
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) setMenu(false);
  });
}

const form = document.querySelector("#keepsake-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    const note = document.querySelector(".success");
    if (note) {
      note.style.display = "block";
      note.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}
