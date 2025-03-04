const express = require("express") // importing
 
const app = express() ;

app.set("view engine" , "ejs") 

// server file  should be outside view folderk


app.get("/",(req,res) => {
    // res.send("server created...")
    // res.sendFile("template/index.html", {root:__dirname})
    let brandname = "Google.com"; 

    res.render("index",{brandname:brandname}) ; 
}); 

app.listen(4011, ()=>{
    console.log(`server is runing on port 4011 . `) ; 
}); 

