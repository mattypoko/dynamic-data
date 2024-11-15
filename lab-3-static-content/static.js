const http = require('http')
const fs = require("fs")
const PORT = process.env.PORT || 3000;

const displayPage = (path,res,contentType, responseCode = 200) => {
    fs.readFile(__dirname + path , (errors, content) => {
        if (errors){
            res.writeHead(500,{'Content-type':'text/plain'})
            return res.end('500 Internal Error')
        }
        res.writeHead(responseCode,{"Content-Type" : contentType})
        res.end(content)
    })       
}
 
const server = http.createServer( (request,response) => {
    const path = request.url;
    switch(path) {
        case '':
        case '/':   
            displayPage('/public/home.html',response,"text/html")   
            break
        case '/about':
            displayPage('/public/about.html',response,"text/html")
            break
        case '/contact':
            displayPage('/public/contact.html',response,"text/html") 
            break
        case '/logo':
            displayPage('/public/img/logo.jpg',response,"image/jpg") 
            break
        default:
            displayPage('/public/404.html',response,"text/html",400)
            break
    }
    /*
    response.writeHead(200 , { "Content-Type" : "text/plain" })
    response.end("Hello World")
    */
})

server.listen(port, () => console.log("server started on port " + port + ". press ctrl + c to stop"))