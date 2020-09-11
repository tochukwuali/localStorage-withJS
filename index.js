const form = document.querySelector('form')
const clearButton = document.getElementById('clear')
const ul = document.querySelector('ul')
const input = document.getElementById('item')

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const makeLIistItems = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let textInput = input.value
    
    itemsArray.push(textInput);
    localStorage.setItem('items', JSON.stringify(itemsArray))
    makeLIistItems(textInput)
    input.value = ''
})

data.map((item) => {
    makeLIistItems(item)
})

clearButton.addEventListener('click', function() {
    localStorage.clear()
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
})
