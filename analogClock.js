// Funktion, um die Zeit zu aktualisieren
function updateClock() {
    const now = new Date(); // Aktuelle Zeit
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Berechnungen für Drehung der Zeiger
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // 30 Grad pro Stunde + zusätzlicher Anteil durch Minuten
    const minDeg = minutes * 6; // 6 Grad pro Minute
    const secDeg = seconds * 6; // 6 Grad pro Sekunde

    // Setze die Drehung der Zeiger
    document.querySelector('.hour-hand').style.transform = `rotate(${90 + hourDeg}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${90 + minDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${90 + secDeg}deg)`;
}

// Initialisiere die Uhr und starte das Update alle 1000ms (1 Sekunde)
setInterval(updateClock, 1000);

// Aktualisierung der Uhr
updateClock();
