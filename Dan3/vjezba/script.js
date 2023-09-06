let list = document.getElementById("lista")
let elements = list.querySelectorAll("li")

let form = document.getElementById("forma1")
let input = document.querySelector('#forma1 input[type="text"]')
let submit = document.getElementById("submit2")

let xButtons = document.querySelectorAll("li button")

//let findBtn = document.getElementById("submit2")
let search = document.getElementById("search")
let searchResults = document.getElementById("searchResults")

function removeEl(x){
    list = document.getElementById("lista")
    console.log("remove "+ x.parentElement.innerText)
    list.removeChild(x.parentElement)
    xButtons = document.querySelectorAll("li button")
}


function addNew(event){
    //no refresh
    event.preventDefault()

    //novi element liste
    let newEl = document.createElement("li")
    newEl.innerText = input.value 
    console.log(newEl.innerText)
    //dugme od novog elementa liste
    let newX = document.createElement("button")
    newX.innerText = "X"
    newEl.appendChild(newX)
    list.appendChild(newEl)
    xButtons = document.querySelectorAll("li button")
    console.log(xButtons)
    list = document.getElementById("lista")
    elements = list.querySelectorAll("li")

    //dodavanje event listenera na novo dugme
    newX.addEventListener("click", ()=>{
        removeEl(newX)
    })
}

submit.addEventListener("click", addNew)

xButtons.forEach(x => {
    x.addEventListener("click",()=>{
        removeEl(x)
    })
});

//console.log(search)


search.addEventListener("change",(event)=>{
    //event.preventDefault()
    console.log("kliknut je search")
    elements = list.querySelectorAll("li")


    
    if(search.value){

        elements.forEach(e=> {
            console.log(e.innerText)
            console.log(search.value)
            if(e.innerText.includes(search.value)){
                console.log("uspjesno")
                let found = document.createElement("li")
                found.innerText = e.innerText
                
                
                searchResults.appendChild(found)    
                
                console.log(searchResults)
                
            }
        });
    }
    //console.log(event)
})


