const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

window.onload = function() {
    const fadeElems = document.querySelectorAll('.fade-in');
    fadeElems.forEach(function(elem) {
      elem.classList.add('show');
    });
  };


  
