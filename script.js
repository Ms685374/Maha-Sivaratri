// Countdown Timer
function countdown() {
    const specialDate = new Date('May 4, 2025 00:00:00').getTime(); // Update with your special date
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = specialDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = "<h2>Happy Birthday!</h2>";
        }
    }, 1000);
}

// Initialize Countdown
document.addEventListener('DOMContentLoaded', countdown);