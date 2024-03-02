const refs = {
  headerBtn: document.querySelector(".header-burger-btn"),
  headerIcon: document.querySelector(".header-burger-icon"),
  headerMenu: document.querySelector(".header-modal-menu"),
  burgerSvg: document.querySelector("#burger-svg"),
  body: document.querySelector("body"),
};

refs.headerBtn.addEventListener("click", () => {
  refs.headerMenu.classList.toggle("hidden");
  const check =
    refs.burgerSvg.getAttribute("href") ==
    "./images/symbol-defs.svg#icon-burger";
  if (check) {
    refs.burgerSvg.setAttribute("href", "./images/symbol-defs.svg#icon-close");
    refs.headerIcon.setAttribute("width", "18");
    refs.headerIcon.setAttribute("height", "18");
    refs.headerMenu.style.padding = "5px";
    refs.body.style.backgroundColor = "#4f2ee8";
  } else {
    refs.burgerSvg.setAttribute("href", "./images/symbol-defs.svg#icon-burger");
    refs.headerIcon.setAttribute("width", "28");
    refs.headerIcon.setAttribute("height", "28");
    refs.body.style.backgroundColor = "#fff";
  }
  if (window.innerWidth >= 767) {
    refs.body.style.backgroundColor = "#fff";
  }
});

console.log(window.innerWidth);
