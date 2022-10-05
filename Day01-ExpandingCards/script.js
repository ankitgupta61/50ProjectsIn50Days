const panels = document.querySelectorAll(".panel");

// console.log(panels[0]);
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveStateFromAll();
    panel?.classList?.add("active");
  });
});

const removeActiveStateFromAll = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
