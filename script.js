
const lostAndFound = document.getElementById('lostAndFoundHub')
lostAndFound.addEventListener("click", lostAndFoundHub)

function lostAndFoundHub() {
    const a = document.createElement('a')
    a.href = "https://lost-and-found-hub.netlify.app/"
    a.target = "_blank"
    a.click()
}


const todoLists = document.getElementById('todoList')
todoLists.addEventListener("click", todoList)

function todoList() {
    const a = document.createElement('a')
    a.href = "https://todos-list-by-me.netlify.app/"
    a.target = "_blank"
    a.click()
}



const greenGroves = document.getElementById('greenGrove')
greenGroves.addEventListener("click", greenGrove)

function greenGrove() {
    const a = document.createElement('a')
    a.href = "https://green-grove.netlify.app/"
    a.target = "_blank"
    a.click()
}



const amazon = document.getElementById('amazonClone')
amazon.addEventListener("click", amazonClone)

function amazonClone() {
    const a = document.createElement('a')
    a.href = "https://amazon-home-page-cloned.netlify.app/"
    a.target = "_blank"
    a.click()
}
