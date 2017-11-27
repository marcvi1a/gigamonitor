// COOKIES
var allCookies = {},
    kv = document.cookie.split(";");

for (var id in kv) {
    var cookie = kv[id].split("=");
    allCookies[cookie[0].trim()] = cookie[1];
}

// language preference
var lang = allCookies["lang"],
    url = window.location.href;

if (lang === "en" && url === "https://gigamonitor.com/es/principal.html") {
    window.location.replace("https://gigamonitor.com/");
} else if (lang === "es" && ( url === "https://gigamonitor.com/" || url === "https://gigamonitor.com/en/home.html" )) {
    window.location.replace("https://gigamonitor.com/es/principal.html");
}
