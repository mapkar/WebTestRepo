const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
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
