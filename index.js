const form = document.querySelector("#userForm")

const handleSubmit = function(ev) {
    ev.preventDefault()
    const userList = document.querySelector('#users')
    const f = ev.target
    const user = f.name.value
    const age = f.age.value
    
    const p = document.createElement('p')
    p.textContent = `${user}, ${age}`
    userList.appendChild(p)

    f.reset()
    f.name.focus()
}
form.addEventListener('submit', handleSubmit)