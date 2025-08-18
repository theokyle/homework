document.querySelectorAll(".category").forEach(element => {
  element.addEventListener("click", event => {
    let category = event.currentTarget;
    const icon = category.querySelector(".menu-icon");
    icon.textContent = icon.textContent === "+" ? "-" : "+";
    category.querySelector(".list").classList.toggle("hidden");
  });
});
