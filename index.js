const form = document.querySelector("#userForm")

const handleSubmit = function(ev) {
    const userList = document.querySelector('#users')
    ev.preventDefault()
    const f = ev.target
    const user = f.name.value
    userList.innerHTML += '<p>' + user + '</p>'

    f.name.value = ''
}
form.addEventListener('submit', handleSubmit)