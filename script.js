window.onload = function () {
  const flame = document.getElementById("flame");
  const message = document.getElementById("msg");
  const blowSound = document.getElementById("blowSound");
  const nextBtn = document.getElementById("nextBtn");
  const feverSection = document.getElementById("feverSection");
  const lastBtn = document.getElementById("lastBtn");
  const finalBar = document.getElementById("finalBar");

  setTimeout(() => {
    blowSound.play();
    flame.style.display = "none";
    message.classList.remove("hidden");
    message.classList.add("visible");
    nextBtn.classList.remove("hidden");
  }, 2000);

  nextBtn.addEventListener("click", () => {
    nextBtn.classList.add("hidden");
    feverSection.classList.remove("hidden");
  });

  lastBtn.addEventListener("click", () => {
    finalBar.classList.remove("hidden");
  });
};
