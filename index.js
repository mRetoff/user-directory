const button1 = document.querySelector('button.greeting')

function changeText(ev) {
    //const text = document.querySelector('#Heading1')
    //text.textContent = 'Directory'
    ev.target.textContent = 'Click'
}

button1.addEventListener('click', changeText)