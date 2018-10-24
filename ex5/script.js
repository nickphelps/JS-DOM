// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so:
// https://www.w3schools.com/howto/howto_js_add_class.asp
let button = document.getElementById('myButton')

button.addEventListener('click', function () {
    //Creating a new div
    const myNewElement = document.createElement('div')

    //defining the parent / container div
    const containerBlock = document.getElementById('boxContainer')

    //adding  the new div into the parent div
    containerBlock.appendChild(myNewElement)
    
    //addin the class name to the new element to give it styling
    myNewElement.classList.add('box')
})
