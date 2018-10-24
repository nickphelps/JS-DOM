// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

let button = document.getElementById("myButton")
let myBoxArray = document.body.getElementsByClassName('box')

button.addEventListener('click', function(){
    
    for (let i = 0; i < myBoxArray.length; i++) {
        myBoxArray[i].style.backgroundColor = 'blue'
    }
})


 
