const div = document.createElement('div')
const button = document.createElement('button')
button.textContent = 'Magic'
div.textContent = "I would literally write a book into this div, but let's stick with our homework"
document.body.append(button)
document.body.append(div)
button.addEventListener('click', function(e){
    div.style.display = 'none'
})