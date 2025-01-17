var form = document.getElementById('contact-form');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var isValid = true;
    if (nameInput.value.trim() == "") {
        nameError.style.display = "block";
        isValid = false;
    }
    else {
        nameError.style.display = "none";
    }
    if (emailInput.value.trim() == "") {
        emailError.style.display = "block";
        isValid = false;
    }
    else {
        emailError.style.display = "none";
    }
    if (messageInput.value.trim() == "") {
        messageError.style.display = "block";
        isValid = false;
    }
    else {
        messageError.style.display = "none";
    }
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});
