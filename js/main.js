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

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 500  ) {
    document.getElementById("myBtn").style.display = "block";

  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



  
