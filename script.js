function goTo(screenId) {
  const screens = document.querySelectorAll(".screen");
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
}
