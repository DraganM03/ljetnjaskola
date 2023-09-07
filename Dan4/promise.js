//pr1
/*let promise = new Promise((resolve, reject)=>{
    let sum = 1+3
    if(sum > 3){
        resolve("Success")
    }else{
        reject("Epic fail")
    }
})
*/

//pr2
//console.log(promise)

/*promise.then((message) =>{
    console.log(message)
}).catch(message => console.log(message)).finally(()=>console.log("change da world my final messagew"))
*/

//pr3
/*promise.then((message) =>{
    return "Great "+message
}).then((m)=>{console.log(m)}).catch(message => console.log(message)).finally(()=>console.log("Change da world my final messagew"))
*/

//pr4
/*
function getArg(arg){
    return new Promise((resolve,reject) => {
        if(arg>0){
            resolve({message:"positivan", argument:arg})
        }else if(arg === 0){
            resolve({message:"positivna nula", argument:arg})
        }else{
            reject({message:"manji od nule", argument:arg})
        }  
    })
}
 
//console.log(getArg(4))

getArg(4).then((m)=>{
    console.log(m.argument + " je " + m.message)
}).catch((m)=>{console.log(m.argument + "Je ruzan i " + m.message)}).finally(()=>{console.log("to je to")})
*/

const submitFormOne = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Forma jedan je submitovana")
    }, 3500)
    
})
const submitFormTwo = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve("Forma dva je submitovana")
    }, 4000)

})
const submitFormThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Forma tri je submitovana")
        }, 3000)
})

Promise.all([
    submitFormOne,
    submitFormTwo,
    submitFormThree
]).then((msgs)=>console.log(msgs))

Promise.race([
    submitFormOne,
    submitFormTwo,
    submitFormThree
]).then((msgs)=>console.log(msgs))
