const panels = document.querySelectorAll(".panel");

panels.forEach((panels) => {
  panels.addEventListener("click", function () {
    removeActiveClasses();
    panels.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
