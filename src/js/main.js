const btn = document.getElementById('btn');

let par = document.getElementById('par');

let cnt = document.getElementById('counter')
let integer = 0;

btn.addEventListener('click', myFunction);

function myFunction() {
integer +=1;
localStorage.setItem("incCount",integer);
document.getElementById('alert').innerHTML = `You have <bold>clicked ${integer} </bold> times to related button.`

}




// Popup functionality

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
  console.log('click');
  
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}