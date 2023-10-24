// =============== start the nav bar
const nav = document.querySelector("header nav");

window.onscroll = () => {
    if(window.scrollY > 250) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}
// =============== end the nav bar

// =============== start the menu
const burgerIcon = document.querySelector("header nav i.burger"),
      closeIcon = document.querySelector("header li.close-icon"),
      navBar = document.querySelector("header nav ul");

burgerIcon.addEventListener("click", () => {
    navBar.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    navBar.classList.remove("active");
});
// =============== end the menu