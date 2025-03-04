const express = require("express") ; 
const app = express() ; 

app.use(m1)  ; 
app.use(m2) ; 
app.use(m3) ; 

app.get("/", (req,res)=>{   // next not required here 
    console.log("running   / ") ; 
    res.send("home" ) ; 
    
})

app.use(m3) ; 

app.get("/about",(req,res)=>{
    console.log("running about ");
    res.send("about page "); ``
})
 
        
function m1(req,res,next){
      console.log("running middleware 1 ");
      next() ; 
}

function m2(req,res,next){
    console.log("running middleware 2 ");
    next() ; 
}


function m3(req,res,next){
    console.log("running middleware 3");
    next() ; 
}





app.listen(5678 , (req,res)=>{
    console.log("server started ")
})
