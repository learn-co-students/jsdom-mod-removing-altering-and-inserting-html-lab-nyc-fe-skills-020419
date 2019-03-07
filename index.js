/* Enter the code to remove the main node element under this comment */
let main = document.querySelector('main')
main.remove()


/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
//<h1></h1>
newHeader.id ='victory'
//Changes newHeader id to victory
newHeader.innerText = "Michael is the champion"
document.body.appendChild(newHeader)