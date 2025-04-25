
document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("flowerBox");

  box.addEventListener("click", () => {
    box.classList.toggle("open");
  });

  // Countdown
  const countdown = document.getElementById("countdown");
  const birthday = new Date("May 9, 2025 00:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance < 0) {
      clearInterval(interval);
      countdown.innerHTML = "Happy Birthday, Obakeng!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});
