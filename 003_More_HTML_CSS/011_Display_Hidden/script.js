function toggleHidden() {
  const secretEls = document.querySelectorAll(".secret");

  secretEls.forEach((el) => {
    el.classList.toggle("hidden");
  });
}
