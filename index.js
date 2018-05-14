const button1 = document.querySelector('button.greeting')

function changeText() {
    const text = document.querySelector('#Heading1')
    const text2 = document.querySelector('#Heading2')
    text.textContent = 'Directory'
    text2.textContent = 'New Heading'
    //ev.target.textContent = 'Click'
}

button1.addEventListener('click', changeText)