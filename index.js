/* Enter the code to remove the main node element under this comment */
document.querySelector ('main')
let myMain = document.querySelector ('main')
myMain.remove()
/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerText="Niqua is the champion!"
document.body.appendChild(newHeader)