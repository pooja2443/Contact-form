const form = document.getElementById('contact-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const messageInput = document.getElementById('message') as HTMLInputElement;

const nameError = document.getElementById('name-error') as HTMLSpanElement;
const emailError = document.getElementById('email-error') as HTMLSpanElement;
const messageError = document.getElementById('message-error') as HTMLSpanElement;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if(nameInput.value.trim() == ""){
        nameError.style.display = "block";
        isValid = false;
    }else{
        nameError.style.display = "none";
    }

    if(emailInput.value.trim() == ""){
        emailError.style.display = "block";
        isValid = false;
    }else{
        emailError.style.display = "none";
    }

    if(messageInput.value.trim() == ""){
        messageError.style.display = "block";
        isValid = false;
    }else{
        messageError.style.display = "none";
    }

    if(isValid){
        alert("Form submitted successfully!");
        form.reset();   
    }

    
});

