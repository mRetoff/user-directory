const form = document.querySelector("#userForm")
let user, age, color

//Processes data when info is submitted
const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    user = f.name.value
    age = f.age.value
    color = f.color.value

    renderList()

    f.reset()
    f.name.focus()
}

//Creates a color element and returns that element
function renderColor(c) {
    const div = document.createElement('div')
    div.style.backgroundColor = c
    div.style.width = '6rem'
    div.style.height = '3rem'
    return div
}

//Creates a list item for each item
function renderListItem(label, value) {
    const item = document.createElement('li')
    item.textContent = `${label}: `
    try {
        item.appendChild(value)
    } catch {
        item.textContent += value
    }
    return item
}

//Creates a list of stats for each user
function renderList() {
    const userList = document.querySelector('#users')
    const list = document.createElement('ul')
    
    list.appendChild(renderListItem('Name', user))
    list.appendChild(renderListItem('Age', age))
    list.appendChild(renderListItem('Favorite Color', renderColor(color)))
    userList.appendChild(list)
}

form.addEventListener('submit', handleSubmit)