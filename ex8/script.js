/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
let theButton = document.getElementById('add-button')

let listArray = document.getElementById('todo-list')
console.log(listArray)

let listArrayLength = document.getElementById('todo-list').childNodes.length - 2
console.log(listArrayLength)

theButton.addEventListener('click', function() {
    
    let nextTask = document.getElementById('description').value
    // console.log( nextTask )

    if (nextTask === 'Enter Next Task') {
        alert('Please enter a value')
    } else {
    //creating new list element / child
    const myNewElement = document.createElement('li')

    let textNode = document.createTextNode(nextTask)

    //giving new element text value
    myNewElement.appendChild(textNode)

    //creating container div
    const parentContainer = document.getElementById('todo-list')

    //appending child to parent
    parentContainer.appendChild(myNewElement)

    //Clear input text when user pressess button
    document.getElementById('description').value = ''
    }//else

    //makes the nodelist array
    let myNodeList = document.querySelectorAll('li')

    console.log(myNodeList)
    // document.getElementById('li').innerHTML = myNodeList.length
    console.log(myNodeList.length)

//adding a line strike through
for (let i = 0; i < myNodeList.length; i++){
    myNodeList[i].addEventListener('click', function () {
  
        myNodeList[i].style.textDecoration = 'line-through'

    })
}//for
})//event listener

// //adding a delete button
//     let deleteButton = document.getElementById('delete-button')

//     deleteButton.addEventListener('click', function() {
//         let myNodeListDeteleVersion = document.querySelectorAll('li')

//         for (let i = 0; i < myNodeListDeteleVersion.length; i++) {
//             myNodeListDeteleVersion[i].removeChild([1])
//         }
//     })


