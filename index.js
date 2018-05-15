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
    
    //Add items to list and add list to the page
    const userList = document.querySelector('#users')
    const list = document.createElement('ul')
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    userList.appendChild(list)

    f.reset()
    f.name.focus()
}
form.addEventListener('submit', handleSubmit)