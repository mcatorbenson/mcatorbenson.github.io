document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("lightbox-overlay");
  const overlayImg = document.getElementById("lightbox-image");
  const overlayCaption = document.getElementById("lightbox-caption");

  document.querySelectorAll("a.lightbox").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const img = link.querySelector("img");

      overlayImg.src = link.href;
      overlayImg.alt = img.alt;
      overlayCaption.textContent = img.alt;

      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayImg.src = "";
    overlayCaption.textContent = "";
  });
});
