const express = require("express")
const app = express()

app.set("view engine","ejs") ; 

app.get("",(req,res)=>{
    res.render("layout")
});

app.get("/home",(req,res)=>{
    res.render("home")
});

app.get("/contact",(req,res)=>{
    res.render("contact")
});

app.get("/placement",(req,res)=>{
    res.render("placement")
});

app.get("/courses",(req,res)=>{
    res.render("courses")
});

app.listen(4041, ()=>{
    console.log(`server is started..`)
}); 