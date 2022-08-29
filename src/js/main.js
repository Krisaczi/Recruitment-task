// Button

const btn = document.getElementById("btn");
btn.addEventListener("click", myFunction);
const reset = document.createElement("button");
reset.classList.add("reset");
reset.innerHTML = "reset";

function myFunction() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
    console.log("preset");
  }
  document.getElementById('alert').innerHTML = `You have clicked <b> ${localStorage.clickcount} times </b> to related button.`

  
  reset.addEventListener("click", () => {
    console.log("klik");
    localStorage.clear();
  });
  
}

// Popup functionality

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
modal.appendChild(reset);
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

