const div = document.createElement('div')
const h2 = document.createElement('h2')
const att = document.createElement('a')

h2.textContent = 'Gandolf'
att.textContent = 'Go to profile'
att.href = '#'
div.append(h2)
div.append(att)
document.body.append(div)