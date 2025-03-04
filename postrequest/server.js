// sensitive info is not sent thru getreq , in this case post req is used becoz data is not visible in url in post-req . 
// any req which changes the state of server  , is sent thru post req . 
// change in state  of server includes : adding , deleting , updating users  . 
//post-req is comes inside body (hidden)  . 


//starting server  : npm init -y , npm i express , starting server : nodemon server.js 

const express = require("express") ; 
const app  = express()  ; 

app.use(express.urlencoded({extended:true})) // so in thunder-client , will use form-encoded .
app.use(express.json()) ; 
// this ^ two are middleware . 

let userData=[]
app.get("/signUp",(req,res)=>{
    // __dirname : jis directory m h wha tk k path dega . 
    res.sendFile(__dirname + "/signUp.html") //send : , sendFile : sends file's address . 
})

app.post("/signUp",(req,res)=>{ //same route name se differnt method bna skte  h , same route name se same method nhi bana skte. 
    let{username,useremail,userpassword} = req.body ;
    let newUser={
        name:username , 
        email:useremail, 
        password:userpassword
    } 
    userData.push(newUser) ;
    res.send(userData) ; 
    console.log(username, useremail,userpassword) ; 
})

app.listen(3434,()=>{  //http://localhost:3434/signUp  , note : http should be there , not https .
    console.log("server started.....") ; 
})

