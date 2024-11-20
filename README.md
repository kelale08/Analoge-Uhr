# Analoge Uhr

## Beschreibung
Dies ist eine einfache **analoge Uhr**, die mit **HTML**, **CSS** und **JavaScript** erstellt wurde. Die Uhr zeigt die aktuelle Zeit auf einem klassischen analogen Zifferblatt an, wobei die Stunden-, Minuten- und Sekundenzeiger sich in Echtzeit bewegen.

### Funktionen:
- **Echtzeitaktualisierung** der Zeiger.
- Stunden-, Minuten- und Sekundenzeiger.
- Markierungen für jede Stunde (1 bis 12).
- Markierungen für jede Minute (außer jede 5. Minute).
- **Zentrales Punkt-Element** in der Mitte der Uhr.
- **Glow-Effekt** für den Uhrhintergrund.
- **Responsives Design** für verschiedene Bildschirmgrößen.

## Technologien
- **HTML**: Struktur der Uhr.
- **CSS**: Gestaltung und Animation der Uhr.
- **JavaScript**: Berechnung und Aktualisierung der Uhrzeit.

## Funktionsweise:
Die Uhr wird kontinuierlich mit JavaScript aktualisiert, indem der Winkel für jede Zeigerposition anhand der aktuellen Stunden-, Minuten- und Sekundenwerte berechnet wird.

1. **Stundenzeiger**: Bewegt sich basierend auf der Stunden- und Minutenangabe.
2. **Minutenzeiger**: Bewegt sich entsprechend der Minutenangabe.
3. **Sekundenzeiger**: Bewegt sich mit jeder verstrichenen Sekunde.

### JavaScript Code für die Uhraktualisierung:
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
