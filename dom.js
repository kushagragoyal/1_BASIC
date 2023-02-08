//console.dir(document)

console.log(document.domain)
console.log(document.URL)
console.log(document.title)
console.log(document.doctype)

document.title = 123

console.log(document.all)
console.log(document.head)
console.log(document.body)

console.log(document.all[10])
document.all[10].textContent = 'hello'

console.log(document.forms[0])

console.log(document.getElementById("header-title"))
var ht = document.getElementById("header-title")
console.log(ht)

var h = document.getElementById("main-header")
h.style.borderBottom = "Solid 3px #000"

ht.textContent = 'hello'
ht.innerText = 'bye'

ht.innerHTML = '<h3>Hello</h3>'

ht.style.borderBottom = "Solid 3px #000"

var a = document.getElementById("addItem")
a.innerHTML = '<B>Add Items<B>'
a.style.color = 'green'
