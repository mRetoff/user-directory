const button1 = document.querySelector('button.greeting')

function changeText() {
    const text = document.querySelector('p.greeting')
    text.textContent = 'You done clicked'
}

button1.addEventListener('click', changeText)