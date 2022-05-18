const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');
var form = document.getElementById('form');
const errEmail = document.getElementById('err-email');
const errPass = document.getElementById('err-pass');

function validateForm() {
    const val = email.value.indexOf('@');
    const out = val !== -1 && email.value.slice(val);

    if (out !== '@jinnss.com') {
        errEmail.innerHTML = `<div  style="color: red;"> Invalid Email</div>`;
    } else {
        errEmail.innerHTML = '';
    }

    if (password.value !== 'Tech.temp@123') {
        errPass.innerHTML = '<div  style="color: red;">Invalid Password</div>';
    } else {
        errPass.innerHTML = '';
    }

    if (out && password.value === 'Tech.temp@123') {
        button.setAttribute('class', 'btn btn-primary btn-block');
        button.disabled = false;
        button.setAttribute('onclick', "location.href = './table.html'");
        button.style.cursor = 'pointer';
    } else {
        button.style.cursor = 'not-allowed';
        button.disabled = true;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
});
