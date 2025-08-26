window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    splash.style.display = "none";
    mainContent.style.display = "block";
  }, 2500); // 2.5 seconds
});
