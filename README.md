# Analoge Uhr

## Beschreibung
Dies ist eine einfache **analoge Uhr** mit Zeigern für Stunden, Minuten und Sekunden, die sich in Echtzeit aktualisieren. Die Uhr wird mit **HTML**, **CSS** und **JavaScript** erstellt und zeigt die aktuelle Zeit auf einem klassischen analogen Zifferblatt an. 

Die Zeiger (Stunden, Minuten und Sekunden) bewegen sich basierend auf der tatsächlichen Zeit, die mit JavaScript ermittelt wird.

## Funktionen
- Echtzeitaktualisierung der Zeiger.
- Stunden-, Minuten- und Sekundenzeiger.
- Markierungen für jede Stunde (1 bis 12).
- Zentrales Punkt-Element in der Mitte der Uhr.
- Responsives Design für verschiedene Bildschirmgrößen.

## Installation

1. **HTML:** Erstelle die grundlegende Struktur der Uhr.
2. **CSS:** Gestalte das Aussehen der Uhr mit einem runden Zifferblatt und animierten Zeigern.
3. **JavaScript:** Berechne die aktuelle Zeit und aktualisiere die Zeiger jede Sekunde.

## Code-Erklärung

### CSS
- **`clock`**: Das runde Uhrgehäuse mit 200px Durchmesser, einem schwarzen Rand und einem Hintergrundbild.
- **`hand`**: Basis-Styling für die Zeiger (Stunden, Minuten, Sekunden), mit Übergängen für sanfte Animationen.
- **`marking` und `minute-marking`**: Markierungen für die Stunden und Minuten, die um das Zifferblatt positioniert werden.
- **`inner-clock-face`**: Der zentrale Punkt der Uhr, der sich immer in der Mitte befindet.

### JavaScript
- **`updateClock()`**: Berechnet den aktuellen Winkel der Stunden-, Minuten- und Sekundenzeiger und aktualisiert deren Position basierend auf der Echtzeit.
- **`setInterval(updateClock, 1000)`**: Ruft `updateClock()` jede Sekunde auf, um die Uhr zu aktualisieren.
- **Stundenmarkierungen**: Es werden 12 Markierungen für die Stunden und 60 für die Minuten hinzugefügt.

```javascript
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

// Stundenmarkierungen hinzufügen
const clock = document.querySelector(".clock");
for (let i = 0; i < 12; i++) {
    const hourMark = document.createElement("div");
    hourMark.classList.add("marking");
    hourMark.style.transform = `rotate(${i * 30}deg) translate(0, -45%)`;
    clock.appendChild(hourMark);
}

// Minutenmarkierungen hinzufügen
for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
        const minuteMark = document.createElement("div");
        minuteMark.classList.add("minute-marking");
        minuteMark.style.transform = `rotate(${i * 6}deg) translate(0, -45%)`;
        clock.appendChild(minuteMark);
    }
}
