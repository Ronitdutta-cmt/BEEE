const express = require("express");
const app = express () ; 

// 1.
// app.get("/profile" , (req,res)=>{ //created request.  
//     //all the query  parameter  req.query k andr jata h .
//     const{username,age}=req.query ; 
//     console.log(username , age)  ; // yeh terminal m print kr rha   
//     //search username in db 
//     res.send("profile page of " + username + " "+ age ) ; // yeh browser pr print kr rha . 

// } )

// 2.---------------------------------

// app.get("/profile/:id/:username",(req,res)=>{ // for multiple query /:name 
//     const {id,username} = req.params ;// id read hoga through params , in prv method query se kr rhe teh . 
//     console.log(id,username); 
//     res.send("profile page of user " +" " + id + " "+ username)
// })





let userData= [
    {
        id:1 ,
        name:"nitesh",
        address:"Delhi"
    },
    {
        id:2 ,
        name:"ritik",
        address:"Faridabad"
    },
    {
        id:3,
        name:"ritesh",
        address:"Dehradun "
    }

]
//http - its called protocol , after \\ - its called domain , after .com - called route . 

app.get("/alluser",(req,res)=>{ //route for all the blogs .
    res.send(userData)
})

app.get("/getUserById",(req,res)=>{ 
    let {id} = req.query;
    console.log(id)  ; 
    for(let i = 0 ; i<userData.length ; i++)//deciding which id to send . 
    {
        if(userData[i].id == id ){
            return res.send(userData[i]) ;
        }
    }
    return res.send("no user found ") 
})

//? method - called query parameter , another method is params .

app.listen(5656 , ()=>{ // to start the server .
    console.log("server has started .. ") 
})


app.get("/delUserbyId", (req,res)=>{
    let {id} = req.query; 
    console.log(id) ; 

    //code for deleting id using splice . 
    for(let i = 0 ;i<userData.length ; i++)//deciding which id to send . 
    {
        if(userData[i]==id){
            userData.splice(id,1) ; 
        }
        }
    console.log(userData.id) ;
    res.send("user deleted successfully..." ) ; 
})



app.get("/addUser" , (req,res)=>{   //http://localhost:5656/addUser?id=4&name=hunter&address=vilaspur
    //s-1 : will first read id ,name and address . 
    //s-2 :  make object of new user . s-3 : add(push) the user in array . 
    const{id,name,address}=req.query ; 
    let newUser = {
        id:id ,
        name:name, 
        address:address 
    }
    userData.push(newUser) ; 
    res.send("user added successfully..")
})