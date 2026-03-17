const messages = [
  "Saumya… I don’t understand why you feel insecure about your smile.",
  "Because to me, your smile is literally the prettiest thing in the world. You are genuinely so beautiful 💛"
];

const images = ["cat1.png", "cat2.png"];

let current = 0;
let i = 0;
const speed = 40;

function typeWriter() {
  if (i < messages[current].length) {
    document.getElementById("message").innerHTML += messages[current].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Wait, then switch to next scene
    setTimeout(nextScene, 2000);
  }
}

function nextScene() {
  if (current < messages.length - 1) {
    current++;
    i = 0;

    const img = document.getElementById("catImage");
    const msg = document.getElementById("message");

    // fade out
    img.classList.add("fade-out");

    setTimeout(() => {
      // change content
      img.src = images[current];
      msg.innerHTML = "";

      // fade in
      img.classList.remove("fade-out");

      typeWriter();
    }, 1000);
  }
}

window.onload = typeWriter;
