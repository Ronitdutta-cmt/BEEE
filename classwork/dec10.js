const http = require("http")

// created a server here . 
const server = http.createServer((request , response)=> {
    console.log("server is started...") 
    // response.end("<h1> running successfully.....  </h1>")

    if(request.url === "/home")//
    {
        response.end("<h1>welcome to home page </h1>")
    }
    else if (request.url === "/about")
    {
        response.end("<h1> welcome to about pge </h1>")
    }
    else
    {
        response.end("<h1> user file not found ....</h1>")
    }
})
// variable(in which server stored in ) . listen( port number  , )
server.listen(4000 , ()=> {
    console.log("server is started on port :  4000 ")
})