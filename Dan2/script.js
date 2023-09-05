console.log("PA GDE STE BRE LJUDI EVO NAS U JOS JEDNOJ EPIZODI DEVLABS KURSA ♥")
console.log("no ; team")

var kamilaOdStoKila = 100;

/* cao */
//cao 2

const konstanta = "cao 3"


function a(){
    console.log("a:")
    var x = 2

    if(true){
        var x = 3
        console.log(x)
    }

    console.log(x)

}

function b(){
    console.log("b:")
    let x = 2

    if(true){
        let x = 3
        console.log(x)
    }

    console.log(x)
}

a() //<-funkcija sa var
b() //<-funkcija sa let

let x = 15
console.log(x.toString())
console.log(parseInt(x.toString()))
console.log(Boolean(x))
console.log(Boolean([]))


console.log("while petlja:")
while(x < 20){
    if(x%2==0){
        console.log(x)
    }
    x++;
}

console.log("for petlja:")
for(var i = 0; i<x; i++){
    if(i%5==0){
        console.log(i)
    }
}


console.log("foreach petlja: (reminder)")
var a = [1,2,3,4,5]
a.forEach(x => {
    console.log(x)
})


console.log("foreach petlja sa casa:")
for(x in a){ //x je indeks a ne vrijednost elementa
    //console.log(x)
    console.log(a[x])
}

//funkcije
console.log("funkcije:")
function trajlabe(a,b){
    return a+b
}

console.log(trajlabe(1,2))
 
var fun = trajlabe
console.log(fun(2,3))

function kalkuliseMe(c,a,b){
    return c(a,b)
}
console.log(kalkuliseMe(trajlabe,3,6))

(function test2(){
    console.log("test2")
})()
/*let x2 = test2()
console.log(x2)*/