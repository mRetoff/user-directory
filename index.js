const form = document.querySelector("#userForm")

const handleSubmit = function(ev) {
    ev.preventDefault()
    const f = ev.target
    const user = f.name.value
    const age = f.age.value
    const color = f.color.value
    
    //Add items to list and add list to the page
    const renName = renderListItem(user)
    const renAge = renderListItem(age)

    const renColor = renderListItem(color)
    const temp = renderColor(color)
    renColor.appendChild(temp)

    const userList = document.querySelector('#users')
    const list = document.createElement('ul')
    list.appendChild(renName)
    list.appendChild(renAge)
    list.appendChild(renColor)
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
    //Check for age
    if(Number.isInteger(+item)) {
        const ageItem = document.createElement('li')
        ageItem.textContent = `Age: ${item}`
        return ageItem
    //Check for color
    } else if(item.substring(0,1) === "#" && item.length === 7) {
        const colorItem = document.createElement('li')
        colorItem.textContent = 'Favorite Color:'
        return colorItem
    //Else name
    } else {
        const nameItem = document.createElement('li')
        nameItem.textContent = `Name: ${item}`
        return nameItem
    }
}

//Creates a list of stats for each user
function renderList() {

}

form.addEventListener('submit', handleSubmit)