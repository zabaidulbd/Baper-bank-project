document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;
    if (emailValue === 'zislam5622@gmail.com' && passwordValue === 'bangladesh') {
        window.location.href = "bank.html";
    }
    else {
        alert('Please enter a valid email id');
    }
})