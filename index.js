/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */

let myMain = document.querySelector('#main')

myMain.remove()

const newHeader = document.createElement('h1');

newHeader.id = "victory"

newHeader.innerText = 'Jeremy is the champion!'

document.body.appendChild(newHeader)

