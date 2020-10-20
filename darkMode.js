function darkModeToggle() {
    var mode = document.getElementById("mode").innerHTML;

    if (mode == '🌑') {
        document.documentElement.setAttribute("data-theme", "dark");
        document.getElementById("mode").innerHTML = '🌕';
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.getElementById("mode").innerHTML = '🌑';
    }
}
