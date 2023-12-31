const contactMe = document.getElementById('contactMe')
contactMe.addEventListener("click", goToContact)

function goToContact() {
    const a = document.createElement('a')
    a.href = "#contact-loc"
    a.click()
}


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
