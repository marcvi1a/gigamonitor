// COOKIES
var EXPIRES_IN_MONTHS = 6;

// language popup
var url = window.location.href;

if (document.cookie.length == 0) {
    if (url === "https://gigamonitor.com/" || url === "https://gigamonitor.com/en/home.html") {
        $('#lang-option').load('../en/en-lang-option.html');
        // $(document).ready(function() {
        //     $('header').css({ 'top': $('#lang-option').height() });
        // });
    } else if (url === "https://gigamonitor.com/es/principal.html") {
        $('#lang-option').load('../es/es-lang-option.html');
        // $(document).ready(function() {
        //     $('header').css({ 'top': $('#lang-option').height() });
        // });
    }
}

// language preference
var langOption = document.querySelectorAll(".lang-option"),
    exp_d = new Date();
exp_d.setMonth(exp_d.getMonth() + EXPIRES_IN_MONTHS);

for (var i = 0; i < langOption.length; i++) {
    langOption[i].addEventListener('click', function() {
        setCookie('lang', this.getAttribute("hreflang"), exp_d);
    }, false);
}

function setCookie(name, value, exp_d) {
	document.cookie = name + "=" + value + ";expires=" + exp_d + ";path=/";
}
