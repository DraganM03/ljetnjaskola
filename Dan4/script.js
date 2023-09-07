
//closures
//kome je ovoliko dosadno bilo da napravi ovo

function outerFun(){
    let outerVar = "napolje"

    function innerFun(){
        console.log(outerVar)
    }

    return innerFun
}



var closure = outerFun()
closure()

var num = 10

function multipleFun(count){
    
    return{
        inc: function(){
            return ++count;
        },
        dec: function(){
            return --count;
        }
    }
}

console.log(multipleFun(num).dec())
console.log(multipleFun(num).inc())



//try catch sintaksa

try{
    //let value = JSON.parse("{aaa aa}")
    throw new TypeError('moja namjerna greskica')
}catch(error){
    if(error instanceof TypeError){
        console.error("moja greska: "+error.message)
    }else{
        console.error("fuck fuck fuck fuck...")
    }
}finally{
    console.log("finale")
}

//byval i byref

let a = 10

function change(b){
    b = 20
}

change(a)
console.log(a)


//epic fail

/*const testObj={
    firstObj:{
        secondObj:{
            thirdVal : 3,
        },
    },
}

let refer = testObj.firstObj.secondObj.thirdVal
//treba ovako
//let refer = testObj.firstObj.secondObj
//refer.thirdVal = 7
console.log(testObj.firstObj.secondObj.thirdVal)*/


let c = {value:10}

function changeObjVal(o){
    o.value = 20
}

changeObjVal(c)
console.log("c value: "+c.value)


//spread i rest
//pr1 spread
let arr1 = [1,2,3]
let arr2 = [4,5,6]

let combined = [...arr1, ...arr2]
console.log(arr1 +" "+ arr2)
console.log(combined)

//pr2 spread
let obj1 = {a:1, b:2}
let obj2 = {c:3, d:4}
let obj3 = {d:5, e:6}
let combinedobj = {...obj1, ...obj2, ...obj3}
console.log(combinedobj)

//pr3 spread
function pozdravi(firstName, lastName){
    console.log(`cao ${firstName} ${lastName}`)
}

var names = ["ime", "prezime"]
pozdravi(...names)

//pr1 rest

var testObj = {
    name: "ime",
    age: 10,
    city: "pg",
    random: "a"
}

var {name:ime , age, ...rest} = testObj
console.log(ime + " " + age)
console.log(rest)

//datumi
var trenutnoVrijeme = new Date()
console.log(trenutnoVrijeme)
var specificinoVrijeme = new Date('1970-1-1')
console.log(specificinoVrijeme)
var specificinoVrijeme2 = new Date('1971-01-01T12:00:00')
console.log(specificinoVrijeme2)

