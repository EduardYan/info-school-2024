//Menu de hamburguesa
const nav = document.querySelector(".nav");
const abrir = document.getElementById("abrirMenu");
const cerrar = document.getElementById("cerrarMenu");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease-in-out",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});
