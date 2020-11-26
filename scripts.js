let night_mode = 'day';
console.log("salam");
let sidebar_status = 'close';

const urlParams = new URLSearchParams(window.location.search);
night_mode = urlParams.get('theme');
if (night_mode == undefined || night_mode == "null") night_mode = "day";
if (night_mode == "night") {
    night_mode="day";
    // change_light_mode();
    let swtch = document.getElementById("night-mode-switch");
    swtch.onclick();
    swtch.checked = true;
}

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
        
        if (table = document.getElementById("data-container-table")) {
            table.classList.add("night-mode");
        }
        if (div = document.getElementsByClassName("bottom-table-button-container")[0]) {
            div.classList.add("night-mode");
        }
        cards = document.getElementsByClassName('card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add('night-mode')
        }
    } else {
        night_mode = 'day';
        document.getElementById("sidebar").classList.remove("night-mode");
        document.getElementById('main').classList.remove("night-mode");
        document.getElementById("navbar").classList.remove("night-mode");
        document.getElementById("buttons-container").classList.remove("night-mode");
        document.getElementById("data-container-table").classList.remove("night-mode");
        document.getElementsByClassName("bottom-table-button-container")[0].classList.remove("night-mode");
        cards = document.getElementsByClassName('card');
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

