// Funktion, um die Uhrzeit zu aktualisieren
function updateClock() {
    const now = new Date(); // Hol die aktuelle Zeit
    const hours = now.getHours(); // Hol die Stunden
    const minutes = now.getMinutes(); // Hol die Minuten
    const seconds = now.getSeconds(); // Hol die Sekunden

    // Berechne, wie weit die Zeiger drehen sollen
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // Stundenzeiger
    const minDeg = minutes * 6; // Minutenzeiger
    const secDeg = seconds * 6; // Sekundenzeiger

    // Dreh die Zeiger
    document.querySelector('.hour-hand').style.transform = `rotate(${90 + hourDeg}deg)`; // Stundenzeiger drehen
    document.querySelector('.min-hand').style.transform = `rotate(${90 + minDeg}deg)`; // Minutenzeiger drehen
    document.querySelector('.second-hand').style.transform = `rotate(${90 + secDeg}deg)`; // Sekundenzeiger drehen
}

// Uhr wird jede Sekunde aktualisiert
setInterval(updateClock, 1000);

// Uhr startet sofort
updateClock();
