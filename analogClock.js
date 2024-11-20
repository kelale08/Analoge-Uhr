let totalSeconds = 0; // Zählt die gesamten Sekunden seit dem Start

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Berechnung der Zeigerwinkel
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // Stundenzeiger
    const minDeg = minutes * 6; // Minutenzeiger

    // Gesamte Sekunden akkumulieren
    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Verschiebe den Sekundenzeiger um 6° nach vorne (eine Sekunde)
    const secDeg = (totalSeconds + 1) * 6; // 6° pro Sekunde und +1 Sekunde

    // Zeiger aktualisieren
    document.querySelector('.hour-hand').style.transform = `rotate(${90 + hourDeg}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${90 + minDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${90 + secDeg}deg)`; // Sekundenzeiger eine Sekunde nach vorne
}

// Aktualisiere die Uhr jede Sekunde
setInterval(updateClock, 1000);

// Starte die Uhr sofort
updateClock();
const clock = document.querySelector(".clock");

//? Add hour markings
for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement("div");
    hourMark.classList.add("marking");
    hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
    clock.appendChild(hourMark);
}

//? Adjust the hour markings
for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement("div");
    hourMark.classList.add("adjustMarking");
    hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
    clock.appendChild(hourMark);
}

//? Add minute markings
for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("minute-marking");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
        clock.appendChild(minuteMark);
    }
}

//? Adjust the minute markings
for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("adjustMinuteMarking");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
        clock.appendChild(minuteMark);
    }
}