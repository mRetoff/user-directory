const form = document.querySelector("#userForm")

const handleSubmit = function(ev) {
    const heading = document.querySelector('#Heading1')
    ev.preventDefault()
    const f = ev.target
    const user = f.name.value
    heading.textContent = user
}
form.addEventListener('submit', handleSubmit)