let current = 0;

function nextScene() {
  if (current === 1) return;

  const img = document.getElementById("catImage");

  // fade out
  img.classList.add("fade-out");

  setTimeout(() => {
    img.src = "cat2.png";
    img.classList.remove("fade-out");

    spawnHearts(); // 💖 hearts appear

    current = 1;
  }, 1000);
}

// ✨ Sparkles generator
function createSparkles() {
  setInterval(() => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 3000);
  }, 300);
}

// 💖 Hearts on second scene
function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = (window.innerWidth / 2 + (Math.random() * 100 - 50)) + "px";
    heart.style.top = (window.innerHeight / 2 + 50) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

// start sparkles on load
window.onload = createSparkles;
