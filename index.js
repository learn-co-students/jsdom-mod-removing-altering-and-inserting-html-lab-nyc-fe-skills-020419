/* Enter the code to remove the main node element under this comment */
let myMain = document.querySelector('#main')
myMain.remove()


let newHeader = document.createElement('h1');

newHeader.id = "victory"
newHeader.innerText = "Greg is the champion!"
document.body.appendChild(newHeader)


