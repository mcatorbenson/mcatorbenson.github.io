document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("lightbox-overlay");
  const overlayImg = document.getElementById("lightbox-image");

  document.querySelectorAll("a.lightbox").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      overlayImg.src = link.href;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayImg.src = "";
  });
});
