function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true;

    if (name == "") {
      document.getElementById("name").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("name").classList.remove("error");
    }

    if (email == "") {
      document.getElementById("email").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("email").classList.remove("error");
    }

    if (message == "") {
      document.getElementById("message").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("message").classList.remove("error");
    }

    return isValid;
  }
  const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (event) => {
event.preventDefault();
validateForm();
});

function validateForm() {
if (name.value.trim() === '') {
nameError.textContent = 'Name is required';
name.focus();
return false;
} else {
nameError.textContent = '';
}

if (email.value.trim() === '') {
emailError.textContent = 'Email is required';
email.focus();
return false;
} else if (!isValidEmail(email.value.trim())) {
emailError.textContent = 'Invalid email';
email.focus();
return false;
} else {
emailError
}
}