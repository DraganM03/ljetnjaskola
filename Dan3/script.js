console.log(document)
document.title = "new title"

console.log(document.body)
console.dir(document.body)

let list = document.getElementById("items")
console.log(list)

let items = document.querySelectorAll("#items li")
console.log(items)

let itemsAlt = list.getElementsByClassName("item")
console.log(itemsAlt)

list.innerHTML = "<li> trajlabe </li>"
list.innerHTML += "<li> ramdagadam daga diga daga dam </li>"

document.body.innerHTML+="<p>lorem</p>"
items = document.querySelectorAll("#items li")

for(item of items){
    item.setAttribute("style" , "background-color: blue;")
    item.style.color = "white";
}

items[0].removeAttribute("style")

let header = document.querySelector("header")
header.style.background = "lime"

let span1 = document.querySelector("#naslov span")
span1.innerHTML = "1234"
span1.style.color = "green"

let naslov = document.getElementById("naslov")
console.log(naslov.innerText)
console.log(naslov.textContent)

naslov.innerText = "novi naslov"

let input = document.querySelector('#forma input[type="text"]')
console.log(input)
input.setAttribute("disabled" , true)
input.setAttribute("type" , "number")

let form = document.getElementById("forma")
console.log(form.firstChild)
console.log(form.firstElementChild)

console.log(form.lastChild)
console.log(form.lastElementChild)

console.log(form.children)
console.log(form.childNodes)