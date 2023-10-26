// Get the modal element and the "learn more" links
var modal = document.getElementById("modal1");
var learnMoreLinks = document.querySelectorAll(".learn-more-link");

// Loop through each "learn more" link and add a click event listener
learnMoreLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    modal.style.display = "block"; // Show the modal
  });
});

// Add a click event listener to the close button to hide the modal
document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none"; // Hide the modal
});

// Add a click event listener to close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal
  }
});