let btn = document.getElementById('btn');

let par = document.getElementById('par');

let cnt = document.getElementById('counter')
let integer = 0;

function popUp() {

let bdy = document.querySelector('body')
let popUp = document.createElement('div');
popUp.setAttribute('class', 'pop');
popUp.innerHTML = 'You have clicked '+integer+ ' times to related button.'

bdy.append(popUp)

}


btn.addEventListener('click', myFunction);

function myFunction() {

integer +=1;

localStorage.setItem("incCount",integer);
popUp();
}
