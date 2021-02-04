let $darkTheme = false
if (localStorage.getItem('defaultTheme') == 'dark') {
    toggleDarkMode()
}

function toggleDarkMode() {

    if ($darkTheme == false) {
        document.getElementById("statusWeb").href = "css/dark.css";
        document.getElementById("infoTheme").innerHTML = "<i class='fas fa-cloud-sun'></i>";
        localStorage.setItem('defaultTheme', 'dark');
        $darkTheme = true
    } else {
        document.getElementById("statusWeb").href = "css/light.css";
        document.getElementById("infoTheme").innerHTML = "<i class='fas fa-cloud-moon'></i>";
        localStorage.removeItem('defaultTheme');
        $darkTheme = false
    }

}