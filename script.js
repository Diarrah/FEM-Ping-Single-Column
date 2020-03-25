let form = document.getElementById('form');
let errorMsg = form.querySelector('small');
let email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailVal = email.value.trim();
    
    if (emailVal === '') {;
        form.className = 'form error';
        errorMsg.innerText = `Email cannot be blank`;
    } else if (!validateEmail(emailVal)) {
        form.className = 'form error';
        errorMsg.innerText = `Please provide a valid email`;
    } else {
        form.className ='form';
    }
});

// Regex copied from StackOverflow //
function validateEmail(email) {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}
