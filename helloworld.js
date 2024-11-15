const http = require('http')
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
    const path = request.url;
    switch(path) {
        case '':
        case '/':   
                response.writeHead(200 , { "Content-Type" : "text/plain" })
                response.end("Home Page")
                Break
        case '/about':
               response.writeHead(200 , { "Content-Type" : "text/plain" })
               response.end("About Page")
               Break
        case '/contact':
               response.writeHead(200 , { "Content-Type" : "text/plain" })
               response.end("Contact Us")
               Break
        default:
               response.writeHead(404 , { "Content-Type" : "text/plain" })
               response.end("Not Found")
               break
    }
    /*
    response.writeHead(200 , { "Content-Type" : "text/plain" })
    response.end("Hello World")
    */
})

server.listen(port, () => console.log("server started on port " + port + ". press ctrl + c to stop"))