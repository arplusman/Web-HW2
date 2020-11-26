const urlParams = new URLSearchParams(window.location.search);
const requestedTab = urlParams.get('tab');
let night_mode = urlParams.get('theme');

if (night_mode == "night") {
    night_mode = "day";
    change_theme();
}

function change_theme() {
    let elements = Array.from(document.querySelectorAll(".minimal-navbar, .signin-body, #main-form, #sign-form, .signin-form, .form-container"));
    night_mode = (night_mode == "night" ? "day" : "night");

    if (night_mode == "night") {
        elements.forEach (element => {
            element.classList.add("night-mode");
        });    
        document.getElementById("pointless-picture").getElementsByClassName("source").srcset = "files/signup-highQ-dark.jpg"
        document.getElementById("pointless-picture").getElementsByClassName("img").src = "files/signup-highQ-dark.jpg"
    } else {
        elements.forEach (element => {
            element.classList.remove("night-mode");
        });
    }
}

isFormValid = true;
let validationErrorMessage = "";

console.log(requestedTab);

if (requestedTab == "signup") {
    change_form_to_signup()
} else {
    change_form_to_signin()
}

function change_form_to_signin() {
    console.log('signin');
    document.getElementById('signin-head-button').classList.add('selected-form-button');
    document.getElementById('signup-head-button').classList.remove('selected-form-button');
    document.getElementById('signup-form').classList.remove('displayed-form');
    document.getElementById('signin-form').classList.add('displayed-form');
    }
    
    function change_form_to_signup() {
    console.log('signup');
    document.getElementById('signup-head-button').classList.add('selected-form-button');
    document.getElementById('signin-head-button').classList.remove('selected-form-button');
    document.getElementById('signup-form').classList.add('displayed-form');
    document.getElementById('signin-form').classList.remove('displayed-form');
    }


function validatePassword(password, confirm_password) {
    if (password.value.length < 5) {
        password.isValid = false;
        validationErrorMessage = 'پسورد باید حداقل ۵ حرف باشد.';
        return false;
    }
    if (confirm_password == undefined) {
        return true;
    }
    if (password.value != confirm_password.value) {
        confirm_password.isValid = false
        validationErrorMessage = "پسورد ها همخوانی ندارند.";
        return false
    } else {
        password.isValid = true;
        validationErrorMessage = "";
        confirm_password.isValid = true;
        return true;
    }
}

function validateSignupForm() {
    let div = document.getElementById('signup-form-error');
    let label = div.getElementsByTagName("label")[0];

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirm_password = document.getElementById("password-confirm");


    isFormValid = validatePassword(password, confirm_password) && email.validity.valid;
    if (isFormValid) {
        div.style.display = "none";
        return true;
    } else {
        div.style.display = "flex";
        label.innerHTML =  validationErrorMessage;
        return false;
    }
}


function validateSigninForm() {
    let div = document.getElementById('signin-form-error');
    let label = div.getElementsByTagName("label")[0];

    let email = document.getElementById("signin-email");
    let password = document.getElementById("signin-password");


    isFormValid = validatePassword(password) && email.validity.valid;
    if (isFormValid) {
        div.style.display = "none";
        return true;
    } else {
        div.style.display = "flex";
        label.innerHTML =  validationErrorMessage;
        return false;
    }
}

Array.from(document.getElementsByClassName("homeLink")).forEach(e => {
    e.href = `index.html?theme=${night_mode}`;
})