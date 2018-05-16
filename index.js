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
function renderListItem(item) {
    //Check for age
    if(Number.isInteger(+item)) {
        const ageItem = document.createElement('li')
        ageItem.textContent = `Age: ${item}`
        return ageItem
    //Check for color
    } else if(item.substring(0,1) === "#") {
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
    //Create each list item
    const renName = renderListItem(user)
    const renAge = renderListItem(age)
    const renColor = renderListItem(color)
    const temp = renderColor(color)
    renColor.appendChild(temp)

    //Create list and add elements to it
    const userList = document.querySelector('#users')
    const list = document.createElement('ul')
    list.appendChild(renName)
    list.appendChild(renAge)
    list.appendChild(renColor)
    userList.appendChild(list)
}

form.addEventListener('submit', handleSubmit)