let totalSeconds = 0; // Counts the total seconds since the start

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the angles for the clock hands
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30; // Hour hand
    const minDeg = minutes * 6; // Minute hand

    // Accumulate total seconds
    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // Move the second hand by 6° forward (one second)
    const secDeg = (totalSeconds + 1) * 6; // 6° per second and +1 second

    // Update the hands
    document.querySelector('.hour-hand').style.transform = `rotate(${90 + hourDeg}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${90 + minDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${90 + secDeg}deg)`; // Move second hand one second forward
}

// Update the clock every second
setInterval(updateClock, 1000);

// Start the clock immediately
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
