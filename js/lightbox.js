document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll("a.lightbox"));
  const overlay = document.getElementById("lightbox-overlay");
  const overlayImg = document.getElementById("lightbox-image");
  const overlayCaption = document.getElementById("lightbox-caption");

  let currentIndex = 0;

  function showImage(index) {
    const link = links[index];
    const img = link.querySelector("img");

    overlayImg.src = link.href;
    overlayImg.alt = img.alt;
    overlayCaption.textContent = img.alt;

    overlay.style.display = "flex";
  }

  links.forEach((link, index) => {
    link.addEventListener("click", e => {
      e.preventDefault();
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  document.addEventListener("keydown", e => {
    if (overlay.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % links.length;
      showImage(currentIndex);
    }

    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + links.length) % links.length;
      showImage(currentIndex);
    }

    if (e.key === "Escape") {
      overlay.style.display = "none";
    }
  });
});
