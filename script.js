const contactMe = document.getElementById('contactMe')
contactMe.addEventListener("click", goToContact)

function goToContact() {
    const a = document.createElement('a')
    a.href = "#contact-loc"
    a.click()
}