// imports express into our project 
const express = require('express') 
//create the express server inside a variable called app
const app = express()
//Specify static routes
app.use(express.static('public'))
// import a package for handlebars
const expressHandlebars = require('express-handlebars')
// make express use the handlebars template engine
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine','handlebars')

const PORT = process.env.port || 3000
//Import app-wide data
const gallery = require("./data/gallery.json")

//process routes before error
app.get('/',(request,response)=>{
    //Import page-specific data
    const data = require("./data/home-data.json")
    response.render('landing',{
        gallery,
        data
    })
})

app.get('/history',(request,response)=>{
    //Import page-specific data
    const data = require("./data/history-data.json")
    response.render('page',{
        gallery,
        data
    })
})

app.get('/people',(request,response)=>{
    //Import page-specific data
    const data = require("./data/people-data.json")
    response.render('page',{
        gallery,
        data
    })
})

app.get('/attractions',(request,response)=>{
    //Import page-specific data
    const data = require("./data/attractions-data.json")
    response.render('page',{
        gallery,
        data
    })
})

app.get('/food',(request,response)=>{
    //Import page-specific data
    const data = require("./data/food-data.json")
    response.render('page',{
        gallery,
        data
    })
})

//NOT FOUND!
app.use((request,response)=>{
    response.status(404)
    response.render('404')
 })

 //SERVER ERROR :(
 app.use((error,request,response,next)=>{
    console.log(error.message)
    response.status(500)
    response.render('500')
 })

 app.listen(PORT, ()=>{
    console.log(`Express is running on http://localhost:${PORT} `)
    console.log('Press ctrl-c to terminate')
 })

