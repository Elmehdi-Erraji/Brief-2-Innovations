const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion));


// function myFunction() {
//   var dropdowns = document.querySelectorAll(".myDropdown");
//   dropdowns.forEach(function(dropdown) {
//     dropdown.classList.toggle("show");
//   });
// }


// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.querySelectorAll(".myDropdown");
//     dropdowns.forEach(function(dropdown) {
//       if (dropdown.classList.contains('show')) {
//         dropdown.classList.remove('show');
//       }
//     });
//   }
// };


const hamburger = document.querySelector(".hamburger");
const flexMenu = document.querySelector(".flex-menu");

hamburger.addEventListener('click', function() {
  flexMenu.classList.toggle('open');

});






