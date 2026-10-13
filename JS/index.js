const main_header = document.getElementById("main_header");
window.addEventListener("scroll", ()=>{
  if (window.scrollY > 100) {
    main_header.classList.add("main__header_section_scrollY");
  }
  if (window.scrollY < 100) {
    main_header.classList.remove("main__header_section_scrollY");
  }
});

const open_menu = document.getElementById("open_menu");
const main_nav = document.getElementById("main_nav");
const close_menu = document.getElementById("close_menu");
const nav_wrapper = document.getElementById("nav_wrapper");

open_menu.onclick = function(){
  close_menu.style.display = "block";
  open_menu.style.display = "none";
  main_nav.classList.add("main__navigation_mobile");
  nav_wrapper.classList.add("navigation__wrapper_mobile");
}

close_menu.onclick = function(){
  close_menu.style.display = "none";
  open_menu.style.display = "block";
  main_nav.classList.remove("main__navigation_mobile");
  nav_wrapper.classList.remove("navigation__wrapper_mobile");
}


const nav_list = document.querySelectorAll(".nav_list");
nav_list.forEach(link =>{
  link.addEventListener("click",()=>{
    main_nav.classList.remove("main__navigation_mobile");
    nav_wrapper.classList.remove("navigation__wrapper_mobile");
  })
})


const header_logo = document.getElementById("header_logo");
header_logo.addEventListener("click",()=>{
  document.location.href = "https://sandwichai.co";
})

const footer_logo = document.getElementById("footer_logo");
footer_logo.addEventListener("click",()=>{
  document.location.href = "https://sandwichai.co";
})

const auth_btn = document.getElementById("auth_btn");
auth_btn.addEventListener("click",()=>{
  window.open("https://dash.sandwichai.co","_blank");
})


const sections = document.querySelectorAll(".animate-section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry =>{
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
},{threshold: 0.3});
sections.forEach(section => observer.observe(section));