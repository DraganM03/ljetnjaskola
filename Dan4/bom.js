console.log(window.innerHeight)
console.log(window.innerWidth)

let newWindow = window.open("https://google.com","_blank")
newWindow.resizeTo(800,800)
newWindow.close()

console.log(window.location)
//location.href = "https://google.com"

console.log(history)
//history.back()
//history.forward()
//history.go(-2)

console.log(navigator)


console.log(screen)

/*setTimeout(()=>{
    console.log("majmuneeee")
}, 10000)*/

var i = 0;
var a = setInterval(()=>{
    console.log(i)
    i++
},300)

setTimeout(()=>{
    clearInterval(a)
},3000)


//cookies

//document.cookie = 