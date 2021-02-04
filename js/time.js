var tanggal = new Date();
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
var jam = tanggal.getHours();
var menit = tanggal.getMinutes();
var detik = tanggal.getSeconds();
var salam, pengingat;

// Greeting
if (jam < 9) {
    salam = "Pagi";
    document.getElementById("statusWeb").href = "css/light.css";
    document.getElementById("infoTheme").innerHTML = "<i class='fas fa-cloud-moon'></i>";
} else
if (jam < 16) {
    salam = "Siang";
    document.getElementById("statusWeb").href = "css/light.css";
    document.getElementById("infoTheme").innerHTML = "<i class='fas fa-cloud-moon'></i>";
} else if (jam < 18) {
    salam = "Sore";
    document.getElementById("statusWeb").href = "css/light.css";
    document.getElementById("infoTheme").innerHTML = "<i class='fas fa-cloud-moon'></i>";
} else {
    salam = "Malam";
    document.getElementById("statusWeb").href = "css/dark.css";
    document.getElementById("infoTheme").innerHTML = "<i class='fas fa-cloud-sun'></i>";
}

// Motivational
if (jam > 2 && jam < 5) {
    pengingat = "mulai harimu dengan beribadah ya! 👳🏻‍♀️";
} else if (jam > 4 && jam < 7) {
    pengingat = "ayo mulai harimu, semangat! 🏃🏻‍♂️";
} else if (jam >= 6 && jam < 16) {
    pengingat = "semangat bekerja! 🧑🏻‍💻";
} else if (jam > 15 && jam < 20) {
    pengingat = "manfaatkan waktumu sebaik mungkin ya! 👨🏻‍🏫";
} else {
    pengingat = "istirahatkan badanmu dan pikiranmu ya 💆🏼‍♂️";
}
document.getElementById("remember").innerHTML = `${hari[tanggal.getDay()]}, ${pengingat}`;
document.getElementById("time").innerHTML = `👋 Hallo,<br> ${salam} semuanya`;

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("liveTime").innerText = time;
    document.getElementById("liveTime").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();