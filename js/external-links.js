document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("main a[href]").forEach(link => {
    // Ignore anchor links and javascript links
    if (
      link.getAttribute("href").startsWith("#") ||
      link.getAttribute("href").startsWith("javascript:")
    ) {
      return;
    }

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
});
