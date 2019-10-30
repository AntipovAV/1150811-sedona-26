var link = document.querySelector(".modal-link");
var modal = document.querySelector(".modal-searching");

var form = modal.querySelector("form");
var arrival = modal.querySelector("[name=arrival]");
var departure = modal.querySelector("[name=departure]");
var adults = modal.querySelector("[name=adults]");
var children = modal.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

link.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (modal.classList.contains("modal-close")) {
    modal.classList.remove("modal-close");
    modal.classList.add("modal-show");}
    else {
    modal.classList.add("modal-close");
    }
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !children.value) {
  evt.preventDefault();
  modal.classList.remove("modal-error");
  modal.offsetWidth = modal.offsetWidth;
  modal.classList.add("modal-error");
} else {
  if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.add("modal-close");
      modal.classList.remove("modal-error");
    }
  }
});
