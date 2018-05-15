const form = document.querySelector("#userForm")

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const user = f.name.value
    const age = f.age.value
    const color = f.color.value

    //Create separate items for list
    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${user}`

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color:'
    colorItem.appendChild(renderColor(color))
    
    //Add items to list and add list to the page
    const userList = document.querySelector('#users')
    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)
    userList.appendChild(list)

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
function renderListItem(item) {

}

//Creates a list of stats for each user
function renderList() {

}

form.addEventListener('submit', handleSubmit)