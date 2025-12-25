document.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");

  if (!header) return;

  if (window.scrollY > 80) {
    header.classList.add("shrunk");
  } else {
    header.classList.remove("shrunk");
  }
});
