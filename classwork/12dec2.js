// const { prebooking , orderStatus }  = require("./12dec")


// prebooking("apache 200cc")
// orderStatus("Duke 200cc")

//------------file creation----------------------------

const fs = require("fs") // its a module , have to import 
// //blocking task => ek rukne pr neeche wle won't run . 
// console.log("file has been created ...")
// fs.writeFileSync("newfile1.txt" , "ths is our first file ") // created new file . 

// console.log("file created ")

//-------------asyncronous file creation ---------------

fs.writeFile("file2.txt" , "this is file 2" , (err)=> 
{
    if(err)
    {
        console.log("err")
    }
    else{
        console.log("file 2 is created successfully .1234 ")
    }
})
console.log("final") // final get printed first coz , its asyncronized , won't wait till file is created . 