function scaleCV() {
  const cvContainer = document.getElementById("cv-container");
  const cvWidth = cvContainer.getBoundingClientRect().width;
  const windowWidth = document.documentElement.clientWidth;
  if (cvWidth > windowWidth) {
    const r = windowWidth / cvWidth;
    document.body.style.transform = `scale(${r})`;
    document.body.style.transformOrigin = "0 0";
  }
}

document.addEventListener("DOMContentLoaded", scaleCV);
window.addEventListener("resize", scaleCV);
