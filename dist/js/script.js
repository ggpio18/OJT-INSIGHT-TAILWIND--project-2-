
  document.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  
  if (window.scrollY > 0){
    header.classList.add('scrolled');
  } else{
    header.classList.remove('scrolled')
  }
});

const burgir = document.querySelector(".burgir__menu");
const headerA = document.querySelector(".header__action");
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");               
    headerA.classList.toggle("open");
})
// specificity is l.link items
const links = document.querySelectorAll(".links__item h4");
links.forEach((link) => {
  link.addEventListener("click", () => {
    link.querySelector("i").classList.toggle("open");
    link.nextElementSibling.classList.toggle("open");
  });
});