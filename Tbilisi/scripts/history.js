//scroll event
window.addEventListener("scroll", () => {
  const section = document.querySelector("section");
  if (window.scrollY > 90) section.classList.add("scrolled");
  else section.classList.remove("scrolled");
});
