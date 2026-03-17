let current = 0;

function nextScene() {
  const img = document.getElementById("catImage");

  if (current === 0) {
    img.classList.add("fade-img");

    setTimeout(() => {
      img.src = "cat2.png";
      img.classList.remove("fade-img");
      spawnHearts();
      current = 1;
    }, 800);

  } else if (current === 1) {
    // go to final page
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "final.html";
    }, 1000);
  }
}

function spawnHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = (window.innerWidth / 2 + (Math.random()*100-50)) + "px";
    heart.style.top = (window.innerHeight / 2 + 50) + "px";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

function createSparkles() {
  setInterval(() => {
    const s = document.createElement("div");
    s.classList.add("sparkle");

    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = window.innerHeight + "px";

    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3000);
  }, 300);
}

window.onload = createSparkles;
