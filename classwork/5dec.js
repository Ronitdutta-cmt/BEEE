console.log("hello spiderman")


//non - blocking 
 
setTimeout(()=>
{
    console.log("order prepared  ")
}, 2000
)


console.log("order delivered ")

function one()
{
    console.log("one order ")
}

one()  ;

function Ostatus(status)
{
    console.log(`order is ${status}`)
}
Ostatus("cancelled.... ")
//----------------------
let greet = (name)=>
{
    console.log(`Good evening ${name}`)
}
greet("Ronit ")