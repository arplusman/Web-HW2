let night_mode = 'day';
let sidebar_status = 'close';

window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
    setTimeout(function () {
        document.querySelector('body').style.opacity = 1
    }, 0)
})

function change_light_mode() {
    if (night_mode === 'day') {
        night_mode = 'night';
        document.getElementById("sidebar").classList.add("night-mode");
        document.getElementById('main').classList.add("night-mode");
        document.getElementById("navbar").classList.add("night-mode");
        document.getElementById("buttons-container").classList.add("night-mode");
        cards = document.getElementsByClassName('card')
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('night-mode')
        }
    } else {
        night_mode = 'day';
        document.getElementById("sidebar").classList.remove("night-mode");
        document.getElementById('main').classList.remove("night-mode");
        document.getElementById("navbar").classList.remove("night-mode");
        document.getElementById("buttons-container").classList.remove("night-mode");
        cards = document.getElementsByClassName('card')
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('night-mode')
        }
    }
}

function change_sidebar_status() {
    if (sidebar_status === 'close') {
        sidebar_status = 'open';
        document.getElementById("sidebar").style.left = '0px';
        document.getElementById("sidebar-close-btn").style.display = 'inline';
        document.getElementById("sidebar-open-btn").style.display = 'none';

    } else {
        sidebar_status = 'close';
        document.getElementById("sidebar").style.left = '-1000px';
        document.getElementById("sidebar-close-btn").style.display = 'none';
        document.getElementById("sidebar-open-btn").style.display = 'inline';
    }
}

function change_form_to_signin() {
    console.log('signin');
    document.getElementById('signin-head-button').classList.add('selected-form-button');
    document.getElementById('signup-head-button').classList.remove('selected-form-button');
}

function change_form_to_signup() {
    console.log('signup');
    document.getElementById('signup-head-button').classList.add('selected-form-button');
    document.getElementById('signin-head-button').classList.remove('selected-form-button');
}

