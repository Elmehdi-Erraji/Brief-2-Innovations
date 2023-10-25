document.addEventListener('DOMContentLoaded', function () {
    // Form validation for the 'myForm' form
    const myForm = document.getElementById('myForm');
    if (myForm) {
        myForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting
 
            // Validation for 'myForm'
            const firstname = document.querySelector('[name="firstname"]').value;
            const email = document.querySelector('[name="email"]').value;
            const phone = document.querySelector('[name="phone"]').value;
            const media = document.querySelector('[name="media"]').value;

            const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
            const phoneRegex = /^\d+$/;

            if (firstname === '' || email === '' || phone === '' || media === '') {
                alert('Please fill in all required fields.');
            } else if (!email.match(emailRegex)) {
                alert('Please enter a valid email address.');
            } else if (!phone.match(phoneRegex)) {
                alert('Phone number should only contain numbers.');
            } else {
                alert('Form submitted successfully.');
                myForm.reset();
            }
        });
    }

    // Form validation for the 'login' form
    const loginForm = document.getElementById('login');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting

            // Validation for 'login' form
            const email = document.querySelector('[name="email"]').value;
            const password = document.querySelector('[name="password"]').value;

            const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

            if (email === '' || password === '') {
                alert('Please fill in both email and password fields.');
            } else if (!email.match(emailRegex)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Logged in successfully.');
                loginForm.reset();
            }
        });
    }

    // Form validation for the 'registration' form
    const registrationForm = document.getElementById('registration');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent the form from submitting

            // Validation for 'registration' form
            const company = document.querySelector('[name="firstname"]').value;
            const email = document.querySelector('[name="email"]').value;
            const emailConfirmation = document.querySelector('[name="email_confirmation"]').value;
            const password = document.querySelector('[name="password"]').value;
            const passwordConfirmation = document.querySelector('[name="password_confirmation"]').value;

            const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

            if (company === '' || email === '' || emailConfirmation === '' || password === '' || passwordConfirmation === '') {
                alert('Please fill in all required fields.');
            } else if (!email.match(emailRegex)) {
                alert('Please enter a valid email address.');
            } else if (email !== emailConfirmation) {
                alert('Email and Email Confirmation do not match.');
            } else if (password !== passwordConfirmation) {
                alert('Password and Password Confirmation do not match.');
            } else {
                alert('Registration successful.');
                registrationForm.reset();
            }
        });
    }
});






//subscription validations

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