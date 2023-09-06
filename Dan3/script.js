//DOM

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
//input.setAttribute("disabled" , true)
//input.setAttribute("type" , "number")

let form = document.getElementById("forma")
console.log(form.firstChild)
console.log(form.firstElementChild)

console.log(form.lastChild)
console.log(form.lastElementChild)

console.log(form.children)
console.log(form.childNodes)


//kraecija elemenata

let test = document.createElement("li")
list = document.getElementById("items")
//prvi nacin dodavanja teksta
test.innerText = "test"

//drugi nacin dodavanja teskta
let textTest = document.createTextNode("1234")
test.appendChild(textTest)
console.log(test)
list.appendChild(test)

let li1 = document.querySelector("#items li")
li1.setAttribute("class", "klasa1")
console.log(li1.classList)
test.classList.add(li1.classList)
console.log(test.classList)
test.classList.remove("klasa1")
console.log(test.classList)
//list.insertBefore(test, li1)
//list.remove()


//EVENTS I EVENT LISTENERS

let btn1 = document.getElementById("dugme1")
var msg = "cao"
//element.addEventListener("akcija" , "funckija")
btn1.addEventListener("click", (event)=>{
    if(msg == "nema vise pozdrava"){
        btn1.innerText = "pozdravi there is no"
        btn1.removeEventListener("click", )
    }else{
        btn1.innerText = "haha kliknuo si me"
    }
    alert(msg)
    msg = "nema vise pozdrava"
    console.log(event.target)
})

//selektovanje
let select = document.getElementById("select")
let liItems = document.querySelectorAll("#items li")


function refreshSelect(){
    select.innerHTML = "";
    liItems = document.querySelectorAll("#items li")
    for(x in liItems){
        x = parseInt(x)
        if(x+1){
            select.innerHTML+='<option value="'+(x+1)+'">'+(x+1)+'</option>'
        }
    }
}
   
refreshSelect()

liItems[0].classList.add("selected")
var i = 0;
select.addEventListener("change", (event)=>{
    liItems[i].classList.remove("selected")
    i = event.target.value-1
    console.log(i)
    liItems[i].classList.add("selected")
})

function addItem(event){
    event.preventDefault()
    let input = document.querySelector('#forma input[type="text"]')
    let novi = document.createElement("li")
    let items = document.getElementById("items")
    novi.innerText = input.value
    console.log(novi.innerText)
    items.appendChild(novi)

    refreshSelect() 

}

document.querySelector('button[type="submit"]').addEventListener("click", addItem)