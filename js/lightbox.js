document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.lightbox").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      alert("Lightbox click works");
    });
  });
});
