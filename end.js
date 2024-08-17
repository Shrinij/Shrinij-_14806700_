document.addEventListener('DOMContentLoaded', function () {
    const confettiCount = 100;
    const body = document.querySelector('body');

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = ${Math.random() * 100}vw;
        confetti.style.animationDelay = ${Math.random() * 2}s;
        confetti.style.backgroundColor = hsl(${Math.random() * 360}, 100% 50%);
        body.appendChild(confetti);
    }
});
<button class="btn" onclick="hurry.html'">Shop Now</button>