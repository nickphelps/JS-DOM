// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

const theHeader = document.getElementById('section-header')

let clickCount = 2

theHeader.addEventListener('click', function () {

    if (clickCount % 2 === 0) {
    //making text disapper
    document.getElementById('section').innerHTML = ''
    clickCount = clickCount + 1
    } else if (clickCount % 2 !== 0) {
    //making text reappear
    document.getElementById('section').innerHTML = 'Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.'
    clickCount = clickCount + 1
    }//else if
    console.log( clickCount )
    
})
