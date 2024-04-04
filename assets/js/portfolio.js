const imgGallery = document.getElementById("img-gallery");

function exitFullpage() {
  imgGallery?.removeAttribute("style");
  imgGallery?.classList.toggle("active");
  imgGallery?.classList.toggle("inactive");
  document.body.style.overflowY = "visible";
}

function enterFullPage() {
  imgGallery?.classList.toggle("active");
  imgGallery?.classList.toggle("inactive");

  imgGallery.style.backgroundImage = "url(" + this.src + ")";
  imgGallery.style.top = window.scrollY + "px";
  imgGallery.style.height = window.outerHeight + "px";
  document.body.style.overflowY = "hidden";
}

// Adjust the top margin of the first section, so there is no content overlap:
function locateFirstSection() {
  const firstSection = document.querySelector("section:first-of-type");
  const navBarHeight = document.querySelector("#nav-bar").getBoundingClientRect().height;
  firstSection.style.marginTop = navBarHeight + 32 + "px";
  firstSection.style.scrollMarginTop = navBarHeight + "px";
}

function addBtnListener(selector) {
  document.querySelector(`#btn-${selector}-more`).addEventListener("click", () => {
    document.querySelector(`#btn-${selector}-more`).style.visibility = "hidden";
    document.querySelector(`#${selector}-2`).style.display = "block";
  });

  document.querySelector(`#btn-${selector}-less`).addEventListener("click", () => {
    document.querySelector(`#btn-${selector}-more`).style.visibility = "visible";
    document.querySelector(`#${selector}-2`).style.display = "none";
  });
}

window.addEventListener("resize", locateFirstSection);
const sections = ["full-stack", "mekanika", "pequena-banda-robotica", "household-music", "phd", "music", "dald"];
sections.forEach((selector) => {
  addBtnListener(selector);
});

const images = document.querySelectorAll("img:not(#header-img):not(.img-link)");
images.forEach((img) => {
  img.addEventListener("click", enterFullPage);
});
imgGallery.addEventListener("click", exitFullpage);
document.addEventListener("keydown", exitFullpage);
locateFirstSection();
