const prebooking = (bikename) => 
{
    console.log(`your ${bikename} is delivered...`)
}
// prebooking("RTR Apache 200cc")

const orderStatus = (bikename)=>
{
    console.log(`your ${bikename}is delivered`)
}

// module.export = prebooking ; // dushre file se call krne ke liye 

module.exports = {prebooking , orderStatus} ; // exporting multiple 


