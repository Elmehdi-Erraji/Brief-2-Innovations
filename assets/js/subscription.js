//subscription

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('emailInput');
    const promotionalCheckbox = document.getElementById('promotionalCheckbox');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the form from submitting initially
  
      // Check if the email input is empty or invalid
      if (!emailInput.value || !validateEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Check if the promotional checkbox is not checked
      if (!promotionalCheckbox.checked) {
        alert('Please agree to receive promotional messages.');
        return;
      }
  
      // Form is valid, you can submit it here if needed
      alert('Form submitted successfully!');
      subscribe-form.reset()
    });
  
    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });