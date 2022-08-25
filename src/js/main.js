// let btn = document.getElementById('btn');

// let par = document.getElementById('par');

// let cnt = document.getElementById('counter')
// let integer = 0;

// function popUp() {

// let bdy = document.querySelector('body')
// let popUp = document.createElement('div');
// popUp.setAttribute('class', 'pop');
// popUp.innerHTML = 'You have clicked '+integer+ ' times to related button.'

// bdy.append(popUp)

// }


// btn.addEventListener('click', myFunction);

// function myFunction() {

// integer +=1;

// localStorage.setItem("incCount",integer);
// popUp();
// }


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}